import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import "./VideoKyc.css"; // Import the CSS file for styling
import { showNotification } from "@mantine/notifications";
import { axiosInstance } from "../../api/axiosInterceptor";
import image from "../../assets/dghub-logo.png";
import ringtoneSound from "../../assets/soft_ringtone.mp3";
import { useSelector } from "react-redux";

const VideoKyc = () => {
  const user = useSelector((store) => store?.user);
  console.log("user", user);
  const [ringtone] = useState(new Audio(ringtoneSound));

  const peerId = user?.videoId;
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [bomData, setBomData] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [incomingCall, setIncomingCall] = useState(null);

  useEffect(() => {
    const initializePeer = async () => {
      sendRequest();
      try {
        const newPeer = new Peer(peerId);

        await new Promise((resolve, reject) => {
          newPeer.on("open", () => resolve());
          newPeer.on("error", (error) => reject(error));
        });

        newPeer.on("call", (call) => {
          setIncomingCall(call);
        });

        peerInstance.current = newPeer;
      } catch (error) {
        console.error("Error initializing peer:", error);
      }
    };

    const sendRequest = () => {
      axiosInstance
        .post("/registration/online-time")
        .then((response) => {
          setBomData(response?.data);
        })
        .catch((error) =>
          console.error("Error sending online time request:", error)
        );
    };

    initializePeer();

    // Clean up function
    return () => {
      if (peerInstance.current) {
        peerInstance.current.destroy();
        peerInstance.current = null;
      }
    };
  }, [peerId]);

  useEffect(() => {
    const sendRequestTime = () => {
      axiosInstance
        .post("/registration/online-time")
        .then((response) => {
          setBomData(response?.data);
          setTimeout(sendRequestTime, 60000); // Corrected here
        })
        .catch((error) =>
          console.error("Error sending online time request:", error)
        );
    };

    sendRequestTime();
  }, []);

  useEffect(() => {
    const videoElement = remoteVideoRef.current;

    const handleTimeUpdate = () => {
      // Update current time whenever the playback time changes
      setCurrentTime(videoElement.currentTime);
    };

    if (videoElement) {
      // Listen for time updates
      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      // Set up a timer to update the current time every second
      const timerId = setInterval(() => {
        setCurrentTime(videoElement.currentTime);
      }, 1000);

      // Clean up event listener and timer on component unmount
      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        clearInterval(timerId);
      };
    }
  }, [remoteVideoRef]);
  useEffect(() => {
    if (incomingCall) {
      // Play the ringtone when there's an incoming call
      ringtone.play();
      ringtone.loop = true; // Set loop to true for continuous playback
    } else {
      // Stop the ringtone when there's no incoming call
      ringtone.pause();
      ringtone.currentTime = 0;
      ringtone.loop = false; // Set loop to false to stop continuous playback
    }

    // Clean up function
    return () => {
      // Pause and reset the ringtone on component unmount
      ringtone.pause();
      ringtone.currentTime = 0;
      ringtone.loop = false;
    };
  }, [incomingCall, ringtone]);
  const acceptCall = () => {
    // Answer the incoming call
    if (incomingCall) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((mediaStream) => {
          currentUserVideoRef.current.srcObject = mediaStream;
          currentUserVideoRef.current.play();

          incomingCall.answer(mediaStream);

          incomingCall.on("stream", (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play();
          });

          incomingCall.on("close", () => {
            showNotification({
              message: "Call Disconnected",
              color: "red",
            });
          });

          incomingCall.on("error", (error) => {
            console.error("Error in call:", error);
          });

          const formData = {
            callStatus: true,
          };

          axiosInstance
            .post("/call-history", formData)
            .then((response) =>
              showNotification({
                message: "Call Accepted",
                color: "success",
              })
            )
            .catch((err) => {
              console.log(err);
            });

          // Reset the incoming call state after accepting
          setIncomingCall(null);
        })
        .catch((error) => {
          console.error("Error accessing user media:", error);
        });
    }
  };

  const rejectCall = () => {
    // Reject the incoming call
    if (incomingCall) {
      incomingCall.close();
      const formData = {
        callStatus: false,
      };

      axiosInstance
        .post("/call-history", formData)
        .then((response) =>
          showNotification({
            message: "Call Rejected",
            color: "success",
          })
        )
        .catch((err) => {
          console.log(err);
        });
      setIncomingCall(null);
    }
  };
  const toggleAudio = () => {
    try {
      const mediaStream = currentUserVideoRef.current.srcObject;
      const audioTracks = mediaStream.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = !isAudioMuted;
      });
      setIsAudioMuted(!isAudioMuted);
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  const toggleVideo = () => {
    try {
      const mediaStream = currentUserVideoRef.current.srcObject;
      const videoTracks = mediaStream.getVideoTracks();
      videoTracks.forEach((track) => {
        track.enabled = !isVideoMuted;
      });
      setIsVideoMuted(!isVideoMuted);
    } catch (error) {
      console.error("Error toggling video:", error);
    }
  };
  const endCall = () => {
    try {
      const mediaStream = currentUserVideoRef.current.srcObject;
      if (mediaStream) {
        const tracks = mediaStream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }

      currentUserVideoRef.current.srcObject = null;
      remoteVideoRef.current.srcObject = null;

      if (peerInstance.current) {
        const formData = {
          callStatus: true,
          videoTimeStamp: formatTime(currentTime),
        };

        axiosInstance
          .post("/call-history", formData)
          .then((response) =>
            showNotification({
              message: "Call Accepted",
              color: "success",
            })
          )
          .catch((err) => {
            console.log(err);
          });
        peerInstance.current.destroy();
        peerInstance.current = null;
      }
    } catch (error) {
      console.error("Error ending the call:", error);
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: incomingCall ? "space-between" : "flex-end",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        {incomingCall && (
          <div className="accept-buttons">
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5210_27949)">
                  <path
                    d="M13.5982 11.9554C13.4673 11.0327 13.2068 10.2664 12.817 9.65625C12.4271 9.04613 11.878 8.69345 11.1696 8.59821C10.7708 9.03869 10.2961 9.38244 9.74554 9.62946C9.19494 9.87649 8.6131 10 8 10C7.38691 10 6.80506 9.87649 6.25446 9.62946C5.70387 9.38244 5.22917 9.03869 4.83036 8.59821C4.12202 8.69345 3.57292 9.04613 3.18304 9.65625C2.79315 10.2664 2.53274 11.0327 2.40179 11.9554C3.03274 12.8482 3.83929 13.5551 4.82143 14.0759C5.80357 14.5967 6.8631 14.8571 8 14.8571C9.13691 14.8571 10.1964 14.5967 11.1786 14.0759C12.1607 13.5551 12.9673 12.8482 13.5982 11.9554ZM11.4286 5.71429C11.4286 4.76786 11.0938 3.95982 10.4241 3.29018C9.75446 2.62054 8.94643 2.28571 8 2.28571C7.05357 2.28571 6.24554 2.62054 5.57589 3.29018C4.90625 3.95982 4.57143 4.76786 4.57143 5.71429C4.57143 6.66071 4.90625 7.46875 5.57589 8.13839C6.24554 8.80804 7.05357 9.14286 8 9.14286C8.94643 9.14286 9.75446 8.80804 10.4241 8.13839C11.0938 7.46875 11.4286 6.66071 11.4286 5.71429ZM16 8C16 9.08333 15.7887 10.1176 15.3661 11.1027C14.9435 12.0878 14.3765 12.939 13.6652 13.6563C12.9539 14.3735 12.1042 14.9435 11.1161 15.3661C10.128 15.7887 9.08929 16 8 16C6.91667 16 5.88095 15.7887 4.89286 15.3661C3.90476 14.9435 3.05357 14.375 2.33929 13.6607C1.625 12.9464 1.05655 12.0952 0.633929 11.1071C0.21131 10.119 0 9.08333 0 8C0 6.91667 0.21131 5.88095 0.633929 4.89286C1.05655 3.90476 1.625 3.05357 2.33929 2.33929C3.05357 1.625 3.90476 1.05655 4.89286 0.633929C5.88095 0.21131 6.91667 0 8 0C9.08333 0 10.119 0.21131 11.1071 0.633929C12.0952 1.05655 12.9464 1.625 13.6607 2.33929C14.375 3.05357 14.9435 3.90476 15.3661 4.89286C15.7887 5.88095 16 6.91667 16 8Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5210_27949">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div class="animated-text">
                <div>{bomData?.serverUserName}</div>
                <div>
                  is calling <span>...</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", paddingLeft: "16px" }}>
              <button
                onClick={acceptCall}
                className="call-action-btn"
                style={{ background: "#108A23" }}
              >
                Accept Call
              </button>
              <button
                onClick={rejectCall}
                className="call-action-btn"
                style={{ background: "#B4271F" }}
              >
                Reject Call
              </button>
            </div>
          </div>
        )}
        <div>
          <div className="poweredBy">POWERED BY</div>
          <div>
            <img src={image} alt="logo" />
          </div>
        </div>
      </div>
      <div className="video-container">
        <div className="video">
          <div
            style={{
              width: "100%",
              padding: "16px",
              background: "#444748",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <video ref={currentUserVideoRef} className="my-video" autoPlay />

              <video ref={remoteVideoRef} autoPlay className="remote-video" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "8px",
                alignItems: "center",
              }}
            >
              <div></div>
              {remoteVideoRef && currentTime > 0 && (
                <div className="call-icons-group">
                  <div className="timer-call">{formatTime(currentTime)}</div>

                  <div className="icon-text-call" onClick={toggleAudio}>
                    {isAudioMuted ? (
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.73121 12.5538C8.51843 12.0136 8.4087 11.4317 8.4087 10.8437V7.19951H6.45403V10.8437C6.45403 12.0475 6.75831 13.1724 7.28346 14.1338L8.73121 12.5538ZM15.4136 5.26186V3.55531C15.4136 1.59989 13.9847 0 12.2372 0C10.4898 0 9.0609 1.59989 9.0609 3.55531V10.8437C9.0609 11.2469 9.13453 11.6287 9.24659 11.9914L15.4136 5.26186ZM16.0651 8.57186V10.8444C16.0651 13.1966 14.3483 15.1108 12.2372 15.1108C11.613 15.1108 11.0253 14.9401 10.5041 14.6436L9.08371 16.1923C9.74045 16.6707 10.481 16.9952 11.2586 17.1451V18.6668H9.06155V20.8H15.4142V18.6668H13.2139V17.1451C15.9374 16.6282 18.0185 14.0037 18.0185 10.8451V7.19951H17.3226L16.0651 8.57186ZM15.4136 10.8437V9.28292L10.9908 14.111C11.3739 14.2959 11.7948 14.3983 12.2372 14.3983C13.9847 14.3983 15.4136 12.7991 15.4136 10.8437ZM18.7801 2.59324L5.30078 17.3037L6.22273 18.3099L19.7008 3.5994L18.7801 2.59324Z"
                          fill="#FA5A4A"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.125 15.8438C14.1365 15.8438 15.7813 14.1562 15.7813 12.0938V4.40625C15.7813 2.34375 14.1365 0.65625 12.125 0.65625C10.1135 0.65625 8.46875 2.34375 8.46875 4.40625V12.0938C8.46875 14.1562 10.1135 15.8438 12.125 15.8438ZM16.532 8.25V12.0938C16.532 14.5747 14.555 16.5938 12.125 16.5938C9.695 16.5938 7.71875 14.5763 7.71875 12.0938V8.25H5.46875V12.0938C5.46875 15.426 7.865 18.1928 10.9985 18.7388V20.3438H8.4695V22.5938H15.782V20.3438H13.2493V18.7388C16.3843 18.1943 18.7798 15.426 18.7798 12.0938V8.25H16.532Z"
                          fill="white"
                        />
                      </svg>
                    )}

                    <div className="white-color">Mic</div>
                  </div>
                </div>
              )}
              <button className="call-end-btn" onClick={endCall}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8695 11.25C20.0258 12.3337 20.1283 13.8162 19.642 14.3837C18.8383 15.3225 13.7495 15.3225 13.7495 13.445C13.7495 12.5 14.587 11.88 13.7833 10.9413C12.9933 10.0188 11.5758 10.0037 9.99953 10.0025C8.42328 10.0012 7.00703 10.0175 6.21578 10.9413C5.41203 11.88 6.24953 12.5 6.24953 13.445C6.24953 15.3212 1.16078 15.3212 0.357033 14.3837C-0.129217 13.8162 -0.026717 12.3337 0.129533 11.25C0.249533 10.5262 0.553283 9.74625 1.52703 8.75C2.98703 7.3875 5.19578 6.275 9.92203 6.25H10.0795C14.8058 6.27375 17.0145 7.3875 18.4745 8.75C19.447 9.74625 19.752 10.5262 19.872 11.25H19.8695Z"
                    fill="white"
                  />
                </svg>
                <span className="white-color">Leave</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoKyc;

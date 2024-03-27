import React, { useEffect, useRef, useState } from "react";
import { useGetMarketIndex } from "../../hooks/dashboard/useDashboard";
import { Alert, Button, Grid, Typography, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utility/userHelper";
import { useSelector } from "react-redux";

const MarketIndexNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMarketIndex();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const { I: nature } = getUser();
  const userStatus = useSelector((state) => state?.user?.status);

  const getChange = (item, isPercent) => {
    if (item > 0) {
      return (
        <Typography
          variant="h6"
          color="green"
          sx={{ display: "flex", gap: "2px", width: "max-content" }}
        >
          {isPercent ? `(${item}  %)` : `(${item})`}
          {isPercent ? <KeyboardArrowUpIcon /> : null}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h6"
          color="red"
          sx={{ display: "flex", gap: "2px", width: "max-content" }}
        >
          {isPercent ? `(${item}  %)` : `(${item})`}
          {isPercent ? <KeyboardArrowDownIcon /> : null}
        </Typography>
      );
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer && data?.length > 0) {
      let animationFrameId;

      const step = () => {
        if (!isPaused) {
          const currentScroll = scrollContainer.scrollLeft;
          const scrollWidth = scrollContainer.scrollWidth;
          const containerWidth = scrollContainer.clientWidth;

          if (currentScroll >= scrollWidth - containerWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 2; // Adjust the speed of scrolling
          }

          animationFrameId = requestAnimationFrame(step);
        }
      };

      const startAnimation = () => {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      const stopAnimation = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = undefined;
        }
      };

      scrollContainer.addEventListener("mouseenter", stopAnimation);
      scrollContainer.addEventListener("mouseleave", startAnimation);
      startAnimation();

      return () => {
        stopAnimation();
        scrollContainer.removeEventListener("mouseenter", stopAnimation);
        scrollContainer.removeEventListener("mouseleave", startAnimation);
      };
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleNavigate = () => {
    if (userStatus === "PENDING") {
      navigate("/kyc/home")
    } else {
      navigate("/kyc-submitted")
    }
  }

  return (
    <>
      <div
        style={{
          overflowX: "hidden",
          width: "100%",
          position: "relative",
          backgroundColor: theme.palette.secondary.nav,
          overflow: "hidden",
        }}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Grid
          sx={{
            display: "flex",
            gap: "16px",
            padding: "4px",
          }}
        >
          <div style={{ minWidth: "100vw" }}></div>

          {!isLoading &&
            data?.length > 0 &&
            data?.map((item, index) => {
              return (
                <span
                  key={index}
                  style={{ display: "flex", gap: "4px", cursor: "pointer" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      width: "max-content",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      width: "max-content",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    {item?.value}
                  </Typography>
                  {getChange(item?.change, false)}
                  {getChange(item?.percent, true)}
                </span>
              );
            })}
          <div style={{ minWidth: "100vw" }}></div>
        </Grid>
      </div>

      {/* Need to change the value of TMS with client nature */}

      {nature === "TMS" && (
        <Alert
          severity="info"
          action={
            <Button
              variant="contained"
              sx={{
                borderRadius: "100px",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.alt,
                display: "flex",
                gap: "8px",
                padding: "6px 12px",
              }}
              onClick={handleNavigate}
            >
              <span>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.78125 1.5H2.78125C2.38343 1.5 2.00189 1.65804 1.72059 1.93934C1.43929 2.22064 1.28125 2.60218 1.28125 3V12C1.28125 12.3978 1.43929 12.7794 1.72059 13.0607C2.00189 13.342 2.38343 13.5 2.78125 13.5H11.7812C12.1791 13.5 12.5606 13.342 12.8419 13.0607C13.1232 12.7794 13.2812 12.3978 13.2812 12V9M7.28125 7.5L13.2812 1.5M13.2812 1.5V5.25M13.2812 1.5H9.53125"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <Typography variant="h7">Open TMS</Typography>
            </Button>
          }
        >
          <Typography variant="h6">
            Don&apos;t have a Trading Account Account?
          </Typography>
        </Alert>
      )}
    </>
  );
};

export default MarketIndexNav;

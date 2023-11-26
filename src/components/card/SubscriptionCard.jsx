import { useTheme } from "@emotion/react";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css"

const SubscriptionCard = ({ section, index, BronzeSub, SilverSub }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        bgcolor={theme.palette.background.alt}
        color={theme.palette.text.main}
        sx={{
          paddingBottom: "16px",
          marginBottom: "16px",
          borderRadius: "6px",
        }}
        key={index}
      >
        <div style={{ position: "relative" }}>
          <img
          className="svgHide"
            src={section?.bg}
            style={{
              width: "100%",
            }}
          />

          <div style={{ width: "100%" }} className="svgShow">
            {section?.bg === BronzeSub ? (
              <svg
                width="100%"
                height="72"
                viewBox="0 0 100% 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M857.809 0H2.0535H-0.808559C-0.808559 0 -75.4893 86.4386 -0.808559 69.896C11.7646 67.1109 12.0053 61.5751 27.812 61.5751C43.6187 61.5751 40.6259 69.896 56.4326 69.896C72.2393 69.896 69.2465 61.5751 85.0532 61.5751C100.86 61.5751 97.867 69.896 113.674 69.896C129.48 69.896 126.488 61.5751 142.294 61.5751C158.101 61.5751 155.108 69.896 170.915 69.896C186.722 69.896 183.729 61.5751 199.535 61.5751C215.342 61.5751 212.349 69.896 228.156 69.896C243.963 69.896 240.97 61.5751 256.777 61.5751C272.583 61.5751 269.59 69.896 285.397 69.896C301.204 69.896 298.211 61.5751 314.018 61.5751C329.824 61.5751 326.832 69.896 342.638 69.896C358.445 69.896 355.452 61.5751 371.259 61.5751C387.066 61.5751 384.073 69.896 399.879 69.896C415.686 69.896 412.693 61.5751 428.5 61.5751C444.307 61.5751 441.314 69.896 457.121 69.896C472.927 69.896 469.935 61.5751 485.741 61.5751C501.548 61.5751 498.555 69.896 514.362 69.896C530.168 69.896 527.176 61.5751 542.982 61.5751C558.789 61.5751 555.796 69.896 571.603 69.896C587.41 69.896 584.417 61.5751 600.223 61.5751C616.03 61.5751 613.037 69.896 628.844 69.896C644.651 69.896 641.658 61.5751 657.465 61.5751C673.271 61.5751 670.278 69.896 686.085 69.896C701.892 69.896 698.899 61.5751 714.706 61.5751C730.512 61.5751 727.52 69.896 743.326 69.896C759.133 69.896 756.14 61.5751 771.947 61.5751C787.754 61.5751 784.761 69.896 800.567 69.896C816.374 69.896 813.381 61.5751 829.188 61.5751C844.995 61.5751 845.235 67.1109 857.809 69.896C932.489 86.4386 857.809 0 857.809 0Z"
                  fill="url(#paint0_linear_3562_26302)"
                />
                <circle
                  opacity="0.1"
                  cx="287.934"
                  cy="15.3251"
                  r="4"
                  transform="rotate(8.44196 287.934 15.3251)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="301.145"
                  cy="4.64853"
                  r="2.5"
                  transform="rotate(8.44196 301.145 4.64853)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="275.847"
                  cy="1.39787"
                  r="6"
                  transform="rotate(8.44196 275.847 1.39787)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="264.432"
                  cy="20.4292"
                  r="8.5"
                  transform="rotate(8.44196 264.432 20.4292)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="286.826"
                  cy="36.3902"
                  r="11"
                  transform="rotate(8.44196 286.826 36.3902)"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3562_26302"
                    x1="-1.5"
                    y1="71.9999"
                    x2="857.5"
                    y2="72"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.00240296"
                      stop-color="#643C03"
                      stop-opacity="0.9"
                    />
                    <stop
                      offset="0.510157"
                      stop-color="#643C03"
                      stop-opacity="0.8"
                    />
                    <stop
                      offset="0.936486"
                      stop-color="#643C03"
                      stop-opacity="0.7"
                    />
                    <stop
                      offset="0.994355"
                      stop-color="#643C03"
                      stop-opacity="0.8"
                    />
                  </linearGradient>
                </defs>
              </svg>
            ) : section?.bg === SilverSub ? (
              <svg
                width="100%"
                height="72"
                viewBox="0 0 100% 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M862.557 0H0.326336H-2.55738C-2.55738 0 -77.8033 86.4386 -2.55738 69.896C10.1109 67.1109 10.3535 61.5751 26.2798 61.5751C42.2061 61.5751 39.1906 69.896 55.1169 69.896C71.0433 69.896 68.0278 61.5751 83.9541 61.5751C99.8804 61.5751 96.865 69.896 112.791 69.896C128.718 69.896 125.702 61.5751 141.628 61.5751C157.555 61.5751 154.539 69.896 170.466 69.896C186.392 69.896 183.376 61.5751 199.303 61.5751C215.229 61.5751 212.214 69.896 228.14 69.896C244.066 69.896 241.051 61.5751 256.977 61.5751C272.903 61.5751 269.888 69.896 285.814 69.896C301.741 69.896 298.725 61.5751 314.651 61.5751C330.578 61.5751 327.562 69.896 343.489 69.896C359.415 69.896 356.399 61.5751 372.326 61.5751C388.252 61.5751 385.237 69.896 401.163 69.896C417.089 69.896 414.074 61.5751 430 61.5751C445.926 61.5751 442.911 69.896 458.837 69.896C474.764 69.896 471.748 61.5751 487.674 61.5751C503.601 61.5751 500.585 69.896 516.512 69.896C532.438 69.896 529.422 61.5751 545.349 61.5751C561.275 61.5751 558.26 69.896 574.186 69.896C590.112 69.896 587.097 61.5751 603.023 61.5751C618.949 61.5751 615.934 69.896 631.86 69.896C647.787 69.896 644.771 61.5751 660.697 61.5751C676.624 61.5751 673.608 69.896 689.535 69.896C705.461 69.896 702.445 61.5751 718.372 61.5751C734.298 61.5751 731.282 69.896 747.209 69.896C763.135 69.896 760.12 61.5751 776.046 61.5751C791.972 61.5751 788.957 69.896 804.883 69.896C820.809 69.896 817.794 61.5751 833.72 61.5751C849.647 61.5751 849.889 67.1109 862.557 69.896C937.803 86.4386 862.557 0 862.557 0Z"
                  fill="url(#paint0_linear_3562_26303)"
                />
                <circle
                  opacity="0.1"
                  cx="287.934"
                  cy="15.3251"
                  r="4"
                  transform="rotate(8.44196 287.934 15.3251)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="301.145"
                  cy="4.64853"
                  r="2.5"
                  transform="rotate(8.44196 301.145 4.64853)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="275.847"
                  cy="1.39787"
                  r="6"
                  transform="rotate(8.44196 275.847 1.39787)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="264.432"
                  cy="20.4292"
                  r="8.5"
                  transform="rotate(8.44196 264.432 20.4292)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="286.826"
                  cy="36.3902"
                  r="11"
                  transform="rotate(8.44196 286.826 36.3902)"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3562_26303"
                    x1="-1.5"
                    y1="72"
                    x2="856"
                    y2="71.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E9AA3" />
                    <stop
                      offset="0.265625"
                      stop-color="#686170"
                      stop-opacity="0.65"
                    />
                    <stop
                      offset="0.458333"
                      stop-color="#9F9CA2"
                      stop-opacity="0.869874"
                    />
                    <stop
                      offset="0.671875"
                      stop-color="#9E9AA3"
                      stop-opacity="0.88"
                    />
                    <stop offset="1" stop-color="#CAC8CD" stop-opacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg
                width="100%"
                height="72"
                viewBox="0 0 100% 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M862.557 0H0.326336H-2.55738C-2.55738 0 -77.8033 86.4386 -2.55738 69.896C10.1109 67.1109 10.3535 61.5751 26.2798 61.5751C42.2061 61.5751 39.1906 69.896 55.1169 69.896C71.0433 69.896 68.0278 61.5751 83.9541 61.5751C99.8804 61.5751 96.865 69.896 112.791 69.896C128.718 69.896 125.702 61.5751 141.628 61.5751C157.555 61.5751 154.539 69.896 170.466 69.896C186.392 69.896 183.376 61.5751 199.303 61.5751C215.229 61.5751 212.214 69.896 228.14 69.896C244.066 69.896 241.051 61.5751 256.977 61.5751C272.903 61.5751 269.888 69.896 285.814 69.896C301.741 69.896 298.725 61.5751 314.651 61.5751C330.578 61.5751 327.562 69.896 343.489 69.896C359.415 69.896 356.399 61.5751 372.326 61.5751C388.252 61.5751 385.237 69.896 401.163 69.896C417.089 69.896 414.074 61.5751 430 61.5751C445.926 61.5751 442.911 69.896 458.837 69.896C474.764 69.896 471.748 61.5751 487.674 61.5751C503.601 61.5751 500.585 69.896 516.512 69.896C532.438 69.896 529.422 61.5751 545.349 61.5751C561.275 61.5751 558.26 69.896 574.186 69.896C590.112 69.896 587.097 61.5751 603.023 61.5751C618.949 61.5751 615.934 69.896 631.86 69.896C647.787 69.896 644.771 61.5751 660.697 61.5751C676.624 61.5751 673.608 69.896 689.535 69.896C705.461 69.896 702.445 61.5751 718.372 61.5751C734.298 61.5751 731.282 69.896 747.209 69.896C763.135 69.896 760.12 61.5751 776.046 61.5751C791.972 61.5751 788.957 69.896 804.883 69.896C820.809 69.896 817.794 61.5751 833.72 61.5751C849.647 61.5751 849.889 67.1109 862.557 69.896C937.803 86.4386 862.557 0 862.557 0Z"
                  fill="url(#paint0_linear_3562_26304)"
                />
                <circle
                  opacity="0.1"
                  cx="287.934"
                  cy="15.3251"
                  r="4"
                  transform="rotate(8.44196 287.934 15.3251)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="301.145"
                  cy="4.64853"
                  r="2.5"
                  transform="rotate(8.44196 301.145 4.64853)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="275.847"
                  cy="1.39787"
                  r="6"
                  transform="rotate(8.44196 275.847 1.39787)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="264.432"
                  cy="20.4292"
                  r="8.5"
                  transform="rotate(8.44196 264.432 20.4292)"
                  fill="white"
                />
                <circle
                  opacity="0.1"
                  cx="286.826"
                  cy="36.3902"
                  r="11"
                  transform="rotate(8.44196 286.826 36.3902)"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3562_26304"
                    x1="1.5"
                    y1="72"
                    x2="858.5"
                    y2="71.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.283872" stop-color="#E0AA3E" />
                    <stop
                      offset="0.786044"
                      stop-color="#E0AA3E"
                      stop-opacity="0.7"
                    />
                    <stop offset="0.827514" stop-color="#F0C570" />
                    <stop offset="1" stop-color="#E0AA3E" stop-opacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
          <div
            style={{ position: "absolute", top: "20%", left: "3%", zIndex: 99 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff" }}>
              {section?.title}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff" }}>
              {section?.subtitle && section?.subtitle}
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "0 20px",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div>
            {section.items.map((item, itemIndex) => (
              <>
                <Typography
                  variant="h5"
                  style={{ color: theme.palette.text.light }}
                >
                  <div
                    key={itemIndex}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 5px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: item.bulletColor,
                      }}
                    />
                    {item.text}
                  </div>
                </Typography>
              </>
            ))}
          </div>
        </div>
        {index !== 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  index === 0 && theme.palette.mode === "dark"
                    ? "black"
                    : section?.buttonColor,
              }}
            >
              Subscribe
            </Button>
          </div>
        )}
      </Box>
    </>
  );
};

export default SubscriptionCard;

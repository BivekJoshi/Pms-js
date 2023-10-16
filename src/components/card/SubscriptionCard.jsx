import { useTheme } from "@emotion/react";
import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const SubscriptionCard = ({ section, index }) => {
  const theme = useTheme();

  return (
    <>
      <Paper elevation={3} sx={{ padding: 0 }} key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 859 72"
          fill="none"
        >
          <path
            d="M857.809 0H2.0535H-0.808559C-0.808559 0 -75.4893 86.4386 -0.808559 69.896C11.7646 67.1109 12.0053 61.5751 27.812 61.5751C43.6187 61.5751 40.6259 69.896 56.4326 69.896C72.2393 69.896 69.2465 61.5751 85.0532 61.5751C100.86 61.5751 97.867 69.896 113.674 69.896C129.48 69.896 126.488 61.5751 142.294 61.5751C158.101 61.5751 155.108 69.896 170.915 69.896C186.722 69.896 183.729 61.5751 199.535 61.5751C215.342 61.5751 212.349 69.896 228.156 69.896C243.963 69.896 240.97 61.5751 256.777 61.5751C272.583 61.5751 269.59 69.896 285.397 69.896C301.204 69.896 298.211 61.5751 314.018 61.5751C329.824 61.5751 326.832 69.896 342.638 69.896C358.445 69.896 355.452 61.5751 371.259 61.5751C387.066 61.5751 384.073 69.896 399.879 69.896C415.686 69.896 412.693 61.5751 428.5 61.5751C444.307 61.5751 441.314 69.896 457.121 69.896C472.927 69.896 469.935 61.5751 485.741 61.5751C501.548 61.5751 498.555 69.896 514.362 69.896C530.168 69.896 527.176 61.5751 542.982 61.5751C558.789 61.5751 555.796 69.896 571.603 69.896C587.41 69.896 584.417 61.5751 600.223 61.5751C616.03 61.5751 613.037 69.896 628.844 69.896C644.651 69.896 641.658 61.5751 657.465 61.5751C673.271 61.5751 670.278 69.896 686.085 69.896C701.892 69.896 698.899 61.5751 714.706 61.5751C730.512 61.5751 727.52 69.896 743.326 69.896C759.133 69.896 756.14 61.5751 771.947 61.5751C787.754 61.5751 784.761 69.896 800.567 69.896C816.374 69.896 813.381 61.5751 829.188 61.5751C844.995 61.5751 845.235 67.1109 857.809 69.896C932.489 86.4386 857.809 0 857.809 0Z"
            fill="url(#paint0_linear_3402_24746)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3402_24746"
              x1="-1.5"
              y1="71.9999"
              x2="857.5"
              y2="72"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00240296" stopColor="red" stopOpacity="0.9" />
              <stop offset="0.510157" stopColor="yellow" stopOpacity="0.8" />
              <stop offset="0.936486" stopColor="blue" stopOpacity="0.7" />
              <stop offset="0.994355" stopColor="green" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        <div
          style={{
            display: "flex",
            width: "859px",
            padding: "32px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <div>
            <Typography
              variant="h5"
              style={{ color: theme.palette.text.light }}
            >
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    pading: "12px 5px",
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
              ))}
            </Typography>
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
            <Button variant="contained">Subscribe</Button>
          </div>
        )}
      </Paper>
    </>
  );
};

export default SubscriptionCard;

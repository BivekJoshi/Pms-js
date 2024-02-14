import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const CustomBox = ({ title, body }) => {
  const theme = useTheme();
  const color = theme.palette.background.btn;
  return (
    <div style={{ backgroundColor: theme.palette.background.alt }}>
      <Box
        sx={{
          // marginTop: "16px",
          padding: { md: " 16px 32px 8px 32px", sm:"5px" },
          borderLeft: `5px solid ${color}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          padding:{sm: " 8px 32px 10px 32px", xs:"5px"},
        }}
      >
        {body}
      </Box>
    </div>
  );
};

export default CustomBox;

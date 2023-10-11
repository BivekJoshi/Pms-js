import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const cardItems = [
  {
    id: 1,
    item: "Profit / Loss",
  },
  {
    id: 2,
    item: "Best Performer",
  },
  {
    id: 3,
    item: "Sell",
  },
  {
    id: 4,
    item: "Buy",
  },
  {
    id: 5,
    item: "Worst Performer",
  },
];

const cardRealise = [
  {
    id: 1,
    item: "Realized",
  },
  {
    id: 2,
    item: "Unrealized",
  },
];

const CustomCard = ({ items, activeId, onClick }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        gap: "0.1rem",
        color: theme.palette.text.main,
      }}
    >
      {items.map((item) => (
        <Button
          variant="primary"
          key={item?.id}
          sx={{
            borderRadius:
              item?.id === items[0]?.id
                ? "1rem 0 0 1rem"
                : item?.id === items[items.length - 1]?.id
                ? "0 1rem 1rem 0"
                : "0",
            background:
              activeId === item?.id ? theme.palette.background.light : "white",
            color: activeId === item?.id ? theme.palette.text.main : "black",
            fontWeight: activeId === item?.id ? "bold" : "normal",
            transform: activeId === item?.id ? "scale(1.1)" : "scale(1)",
            ":hover": {
              background:
                activeId === item?.id
                  ? theme.palette.background.light
                  : "white",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => onClick(item?.id)}
        >
          {item?.item}
        </Button>
      ))}
    </div>
  );
};

const CardInfo = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(null);
  const [active, setActive] = useState(null);

  const handleActiveClick = (id) => {
    setIsActive(id);
  };

  const handleRealiseClick = (id) => {
    setActive(id);
  };
  return (
    <Box padding={2} color={theme.palette.text.main} bgcolor={theme.palette.background.alt}>
      <CustomCard
        items={cardItems}
        activeId={isActive}
        onClick={handleActiveClick}
      />

      <div
        style={{
          display: "flex",
          gap: "0.1rem",
          color: theme.palette.text.main,
          marginTop: "1.6rem",
        }}
      >
        <CustomCard
          items={cardRealise}
          activeId={active}
          onClick={handleRealiseClick}
        />
      </div>

      <div
        style={{
          marginTop: "1rem",
          background: theme.palette.background.light,
          color: theme.palette.text.main,
          padding: "1rem 2.2rem",
        }}
      >
        <Typography
          variant="h3"
          style={{
            borderBottom: `2px solid ${theme.palette.text.main}`,
            color: theme.palette.text.main,
          }}
        >
          Realized Gain/Loss
        </Typography>
        <Box sx={{ marginTop: "1rem", textAlign: "right" }}>
          <Typography variant="h5">0 of 1 in Profit</Typography>
        </Box>
        <div style={{ position: "relative", color: "black" }}>
          <Typography variant="h5" sx={{ textAlign: "right" }}>
            0 of 0%
          </Typography>
          <div
            style={{
              position: "absolute",
              width: "50%",
              height: "0.1rem",
              background: theme.palette.text.main,
              right: 0,
            }}
          ></div>
        </div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography
            style={{
              border: `1px solid ${theme.palette.text.main}`,
              maxWidth: "fit-content",
              padding: "0.2rem 0.4rem",
            }}
            variant="h5"
          >
            Investment XXXX
          </Typography>
          <Typography
            style={{
              border: `1px solid ${theme.palette.text.main}`,
              maxWidth: "fit-content",
              padding: "0.2rem 0.4rem",
            }}
            variant="h5"
          >
            Capital Gain XXXX
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default CardInfo;

import { Button, Card, List, ListItem, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../flexBetween/FlexBetween";

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
    <>
      <div style={{ display: "flex", gap: "0.1rem", color: "black" }}>
        {cardItems.map((items, index) => (
          <Button
            variant="primary"
            key={index}
            sx={{
              borderRadius:
                index === 0
                  ? "1rem 0 0 1rem"
                  : index === cardItems.length - 1
                  ? "0 1rem 1rem 0"
                  : "0",
              background: isActive === items.id ? "blue" : "white",
              color: isActive === items.id ? "white" : "black",
              fontWeight: isActive === items.id ? "bold" : "normal",
              ":hover": {
                background: isActive === items.id ? "blue" : "white",
                transform: "scale(1.1)",
              },
            }}
            onClick={() => handleActiveClick(items?.id)}
          >
            {items?.item}
          </Button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.1rem",
          color: "black",
          marginTop: "1.6rem",
        }}
      >
        {cardRealise.map((items, index) => (
          <Button
            variant="primary"
            key={index}
            sx={{
              borderRadius:
                index === 0
                  ? "0.6rem 0 0 0.6rem"
                  : index === cardRealise.length - 1
                  ? "0 0.6rem 0.6rem 0"
                  : "0",
              background: active === items.id ? "blue" : "white",
              color: active === items.id ? "white" : "black",
              fontWeight: active === items.id ? "bold" : "normal",
              ":hover": {
                background: active === items.id ? "blue" : "white",
                transform: "scale(1.1)",
              },
            }}
            onClick={() => handleRealiseClick(items?.id)}
          >
            {items?.item}
          </Button>
        ))}
      </div>

      <div>
        <Typography variant="h3" style={{ borderBottom: "2px solid green", color: "black" }}>Realized Gain/Loss</Typography>
      </div>
    </>
  );
};

export default CardInfo;

import { Button } from "@mui/material";
import React from "react";

const cardInfo = [
  {
    id: 1,
    item: "Profit/Loss",
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
    item: "Sell",
  },
  {
    id: 5,
    item: "Worst Performer",
  },
];

const CardInfo = () => {
  return (
    <div sx={{ background: "white" }}>
      {cardInfo.map((items) => (
        <Button variant="primary">{items?.item}</Button>
      ))}
    </div>
  );
};

export default CardInfo;

import React from "react";
import SubscriptionCard from "../../../components/card/SubscriptionCard";

const data1 = [
  {
    items: [
      { text: "Watchlist up to 20 scripts", bulletColor: "#643C03" },
      { text: "No more than 2 watchlists", bulletColor: "#643C03" },
      { text: "No more than 2 accounts (Portfolio)", bulletColor: "#643C03" },
      {
        text: "Top 4 list of best and worst performers",
        bulletColor: "#643C03",
      },
      { text: "Watchlist up to 20", bulletColor: "#643C03" },
    ],
  },
];

const data2 = [
  {
    items: [
      { text: "Unlimited scripts on watchlist", bulletColor: "#D9D7DB" },
      { text: "Unlimited Portfolio Addition", bulletColor: "#D9D7DB" },
      { text: "No more than 3 watchlist", bulletColor: "#D9D7DB" },
      {
        text: "Top 7 list of best and worst performer",
        bulletColor: "#D9D7DB",
      },
      { text: "News portal access", bulletColor: "#D9D7DB" },
      {
        text:
          "1 month access to ledger and reports (Bill, Receive and Payment / View report only)",
        bulletColor: "#D9D7DB",
      },
      {
        text: "Performance chart analysis for a month",
        bulletColor: "#D9D7DB",
      },
    ],
  },
];
const data3 = [
  {
    items: [
      { text: "Unlimited watchlist", bulletColor: "#EABB5E" },
      { text: "Unlimited Portfolio Addition", bulletColor: "#EABB5E" },
      {
        text: "Top 10 list of best and worst performer",
        bulletColor: "#EABB5E",
      },
      {
        text: "Top 4 list of best and worst performers",
        bulletColor: "#EABB5E",
      },
      {
        text: "New portal access with favorite scripts update",
        bulletColor: "#EABB5E",
      },
      { text: "Candle Stick Prediction", bulletColor: "#EABB5E" },
    ],
  },
];

const SubscriptionTab = () => {
  return (
    <>
      {data1.map((section, index) => (
        <SubscriptionCard section={section} index={index} />
      ))}
      <br />
      {data2.map((section, index) => (
        <SubscriptionCard section={section} index={index} />
      ))}
      <br />
      {data3.map((section, index) => (
        <SubscriptionCard section={section} index={index} />
      ))}
    </>
  );
};

export default SubscriptionTab;

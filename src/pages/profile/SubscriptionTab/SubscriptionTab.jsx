import React from "react";
import SubscriptionCard from "../../../components/card/SubscriptionCard";

const data1 = [
  {
    items: [
      { text: "Watchlist up to 20 scripts",color:"green"},
      { text: "No more than 2 watchlists",color:"green" },
      { text: "No more than 2 accounts (Portfolio)",color:"green" },
      { text: "Top 4 list of best and worst performers",color:"green" },
      { text: "Watchlist up to 20",color:"green"},
    ],
  },
];

const data2 = [
  {
  items: [
    { text: "Unlimited scripts on watchlist"},
    { text: "Unlimited Portfolio Addition" },
    { text: "No more than 3 watchlist" },
    { text: "Top 7 list of best and worst performer" },
    { text: "News portal access"},
    { text: "1 month access to ledger and reports (Bill, Receive and Payment / View report only)"},
    { text: "Performance chart analysis for a month"},
  ],
}
];
const data3 = [
  {
    items: [
      { text: "Unlimited watchlist"},
      { text: "Unlimited Portfolio Addition" },
      { text: "Top 10 list of best and worst performer" },
      { text: "Top 4 list of best and worst performers" },
      { text: "New portal access with favorite scripts update"},
      { text: "Candle Stick Prediction"},
    ],
  }
];

const SubscriptionTab = () => {
  return (
    <>
    {data1.map((section, index) => (
      <SubscriptionCard section={section} index={index}/>
    ))}
    <br/>
    {data2.map((section, index) => (
      <SubscriptionCard section={section} index={index}/>
    ))}
    <br/>
    {data3.map((section, index) => (
      <SubscriptionCard section={section} index={index}/>
    ))}
  </>
  );
};

export default SubscriptionTab;

import React from "react";
import "./styles/ReducePage.css";


import ReduceHeader01 from "./components/header-01";
import ReduceFooter01 from "./components/footer-01";
import Challenges01 from "./components/challenges-01";
import Classes01 from "./components/classes-01";
import Offsets01 from "./components/offsets-01";
import Suggestions01 from "./components/suggestions-01";

function ReducePage() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleDismiss = (index) => {
    console.log(`Item at index ${index} dismissed`);
  };
    return (
        <div className="suggestions-page">
            <ReduceHeader01 />
            <Suggestions01 />

            <Offsets01 />
            <Challenges01 />
            <Classes01 />

            <ReduceFooter01 />

        </div>
    );
}

export default ReducePage;

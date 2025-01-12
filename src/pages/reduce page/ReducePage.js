import React from "react";
import "./styles/ReducePage.css";

import ReduceHeader01 from "./components/containers/reduce-header-01";
import ReduceFooter01 from "./components/containers/reduce-footer-01";
import Challenges01 from "./components/containers/challenges-01";
import Classes01 from "./components/containers/classes-01";
import Offsets01 from "./components/containers/offsets-01";
import Suggestions01 from "./components/containers/suggestions-01";

function ReducePage() {
    return (
        <div className="reduce-page fade-in-1">
            <ReduceHeader01 />
            <div className="reduce-content-container fade-in-2">
                <Suggestions01 />
                <Offsets01 />
                <Challenges01 />
                <Classes01 />
                <div>
                    <ReduceFooter01 />
                </div>
            </div>
        </div>
    );
}

export default ReducePage;

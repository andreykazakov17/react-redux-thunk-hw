import React from "react";

import "./button.css";

export const Button = ({ handleClick, text }) => (
    <button className="btn" onClick={handleClick}>Get posts!</button>
);
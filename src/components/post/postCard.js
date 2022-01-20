import React from "react";

import "./postCard.css";

export const PostCard = ({ title, body }) => (
    <div className="card-div">
        <h2 className="card-h2">{title}</h2>
        <p className="card-p">{body}</p>
    </div>
);
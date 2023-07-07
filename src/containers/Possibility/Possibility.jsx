import React from "react";
import "./possibility.css";
import vr from "../../assets/vr.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={vr} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request eartly access to get started</h4>
        <h1 className="gradient__text">
          The Possibilites are beyond your imagination
        </h1>
        <p>
          The possibilities of GPT-3, and its subsequent versions, are truly
          beyond imagination. This groundbreaking language model has already
          showcased its potential in various domains, ranging from creative
          writing to software development, customer service to medical research.
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;

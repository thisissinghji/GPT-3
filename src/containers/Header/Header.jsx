import React from "react";
import bgface from "../../assets/bgface.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Join us in creating an incredible project using GPT-3 from OpenAI.
      </h1>
      <p>
        Discover the limitless possibilities that await as we delve into the
        realm of GPT-3 by OpenAI. Let's harness its power to create
        awe-inspiring projects that push the boundaries of imagination and
        innovation. Together, we can embark on a remarkable journey,
        transforming ideas into reality and crafting something truly
        extraordinary. Join us in unlocking the full potential of GPT-3 and
        build an awe-inspiring future.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

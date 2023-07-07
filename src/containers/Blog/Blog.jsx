import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01, blog02,blog03, blog04,blog05} from './imports';
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgURL={blog01} date="26-04-2021" title="ChatGPT is taking over Internet" />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgURL={blog02} date="26-04-2021" title="ChatGPT is taking over Internet" />
            <Article imgURL={blog03} date="26-04-2021" title="ChatGPT is taking over Internet" />
            <Article imgURL={blog04} date="26-04-2021" title="ChatGPT is taking over Internet" />
            <Article imgURL={blog05} date="26-04-2021" title="ChatGPT is taking over Internet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

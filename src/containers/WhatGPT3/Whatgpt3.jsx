import React from "react";
import "./whatgpt3.css";
import Feature from "../../components/feature/Feature"
const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3, which stands for Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. It is powered by deep learning techniques and uses a vast amount of training data to understand and generate human-like text. With its impressive capabilities, GPT-3 can perform tasks such as natural language processing, language translation, content generation, and even engage in conversational interactions."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The potential exceeds the boundaries of your imagination.
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
        title="Chatbots"
        text="Chatbots are computer programs designed to simulate human-like conversations with users. "/>
        <Feature
        title="Knowledgebase"
        text="GPT-3 is trained using a massive amount of text data from the internet. It learns to predict the next word in a sentence, gaining a broad understanding of language patterns and structures." 
        />
        <Feature 
        title="Education"
        text="GPT-3 can provide personalized learning experiences by adapting to individual student needs. "
        />
      </div>
    </div>
  );
};

export default Whatgpt3;

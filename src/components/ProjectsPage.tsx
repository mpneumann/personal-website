import React from 'react';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  return (
    <div className="content">
      <div className="project">
        <h2>Agentic Data Pipeline Constructor for Climate Scientists</h2>
        <a href="https://github.com/agentic-earth/constellation" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <p><strong>Description:</strong> Constellation is a modular platform designed to help climate scientists easily spin up and manage climate models. It comprises four key microservices that work together to streamline machine learning workflows. The Core Backend Microservice ensures robust data persistence and coordination among all services. The Model Hosting Microservice leverages Modal Cloud for containerizing models, versioning, and deploying inference endpoints. The Dagster Microservice orchestrates end-to-end pipelines—from data import and preprocessing to outputting model inference results. Finally, the LLM-based Agent Microservice simplifies model and database selection through dynamic JSON generation, making it seamless for scientists to create, run, and iterate on climate models.</p>
        <p><strong>Why:</strong> While talking to a climate researcher friend of mine, I realized that climate scientists often have trouble spinning up data pipelines to run their analyses. I built this project to make the data pipeline construction process easier for these scientists.</p>
      </div>

      <div className="project">
        <h2>Student-Run Venture Capital Fund Network GPT</h2>
        <a href="https://chatgpt.com/share/67705f72-3dd8-8013-8639-f7dc236095d2" target="_blank" rel="noopener noreferrer">Project Link</a>
        <p><strong>Description:</strong> This GPT helps identify the most suitable Brown alumni to reach out to for domain expertise based on user queries. It analyzes alumni profiles (from LinkedIn) and provides the name of the best match, along with their relevant achievements and experience, to assist student VCs who are performing due diligence on Brown University startups.</p>
        <p><strong>Why:</strong> As Co-Director of Van Wickle Ventures, I realized that my organization was not utilizing the vast network of Brown alumni at our disposal. Also eager to see what the OpenAI GPT Agents buzz was all about, I decided to build this product using their platform.</p>
      </div>

      <div className="project">
        <h2>SPY Spread Game</h2>
        <a href="https://github.com/mpneumann/bouncing_balls" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <p><strong>Description:</strong> Bouncing Balls is a Python-based real-time visualization of the SPY ETFs daily open-close price changes using Pygame. Each trading day is represented as a ball whose color indicates price direction (positive or negative) and whose speed reflects the magnitude of the price change. Clicking on a ball shows its specific open-close spread, while pressing the spacebar pauses or resumes the animation. The project reads from a CSV file containing date, open, and close prices, and uses basic collision detection to simulate realistic bouncing behavior.</p>
        <p><strong>Why:</strong> I have always been interested in visually representing data changes and wanted to experiment with a bouncing balls game medium. I was inspired to make this after tracking SPY leading up to the presidential election.</p>
      </div>
    </div>
  );
};

export default ProjectsPage; 
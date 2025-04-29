import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="content">
      <h1>Hi, I'm Mason Neumann</h1>
      <p>I'm a senior at Brown University studying Applied Math & Computer Science.</p>
      <p>Contacts: 
        <a href="https://github.com/mpneumann" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/masonneumann/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:neumannmason@yahoo.com">neumannmason@yahoo.com</a>
      </p>

      <h2>Some things about me:</h2>
      <ul>
        <li>Grew up in <a href="https://www.google.com/maps?q=modesto+ca" target="_blank" rel="noopener noreferrer">Modesto, CA</a></li>
        <li>Went to Brown because of the Open Curriculum</li>
        <li>Currently enjoying my senior year at Brown, soaking up the sun, bantering with friends, and finishing up a final project in data science.</li>
        <li>I previously led Brown's student-run VC fund <a href="https://www.vanwickleventures.com/" target="_blank" rel="noopener noreferrer">Van Wickle Ventures</a></li>
      </ul>

      <h2>My favorite courses at Brown:</h2>
      <div className="course-list">
        <div className="course">
          <p>APMA 1080: Inference in Genomics and Molecular Biology taught by Professor Matthew Harrison</p>
          <ul>
            <li>Covered topics such as Monte Carlo Estimations, Bayes Nets, Parameter Estimation, Mixture Models, Hidden Markov Models, Regression Models and Estimation, Multiple Hypothesis Testing, and Dimensionality Reduction used by computational biologists.</li>
          </ul>
        </div>

        <div className="course">
          <p>ENVS 1547: Finance and the Environment by Professor Ricardo Bayon</p>
          <ul>
            <li>A seminar focused on discussing the financial markets and their role in addressing climate change. My favorite topics of the course include the Federal Reserve System, water rights, and timber investment management organizations.</li>
          </ul>
        </div>

        <div className="course">
          <p>ECON 0110: Principles of Economics taught by Professor Rachel Friedberg</p>
          <ul>
            <li>An introduction to macro and microeconomics. I went from having no formal understanding of market dynamics to being able to identify and understand some of the market happenings around me.</li>
          </ul>
        </div>

        <div className="course">
          <p>DATA 2060: Machine Learning taught by Professor Andras Zsom</p>
          <ul>
            <li>Covered topics such as PAC Learning, SGD, Boosting, Decision Trees, Naive Bayes, VC Dimension, KNN, K-means clustering, PCA used by data scientists.</li>
          </ul>
        </div>

        <div className="course">
          <p>RELS 0014: Jesus taught by Professor Jae Han</p>
          <ul>
            <li>Examined the foundations of Christianity through an exploration of Jesus Christ. My final paper explored the Nicene Creed's incomplete theological refusal of Arianism.</li>
          </ul>
        </div>
      </div>

      <h2>What I'm currently reading/consuming:</h2>
      <div className="reading-list">
        <p><i>The Technological Republic</i> by Alexander C. Karp and Nicholas W. Zamiska</p>
        <p><i>Siddhartha</i> by Hermann Hesse</p>
      </div>

      <h2>Favorite books:</h2>
      <div className="book-list">
        <div className="book">
          <p><i>Zero to One</i> by Peter Thiel</p>
          <ul>
            <li>Changed how I think about value creation in the US.</li>
          </ul>
        </div>

        <div className="book">
          <p><i>The Great Gatsby</i> by F. Scott Fitzgerald</p>
          <ul>
            <li>I first read this book in high school and it opened my eyes to the duality of the American Dream.</li>
          </ul>
        </div>

        <div className="book">
          <p><i>Barbarian Days</i> by Bill Finnegan</p>
          <ul>
            <li>A great reminder to choose adventure. The best memoir that I have ever read.</li>
          </ul>
        </div>

        <div className="book">
          <p><i>House of the Spirits</i> by Isabel Allende</p>
          <ul>
            <li>Lessons of power, privilege, and family beautifully woven together with magical realism.</li>
          </ul>
        </div>
      </div>
      <br />
      <p><i>last edited on: 04/27/25</i></p>
    </div>
  );
};

export default HomePage; 
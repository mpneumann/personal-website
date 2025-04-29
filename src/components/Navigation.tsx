import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Navigation; 
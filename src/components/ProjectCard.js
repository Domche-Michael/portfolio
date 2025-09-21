import React from "react";

// Composant pour chaque projet
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="btn" target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard";

// Liste de projets (tu peux ajouter ou modifier)
const projectList = [
  {
    title: "Site vitrine pour entreprise",
    description: "Création d’un site moderne et responsive pour une petite entreprise locale. Technologies : HTML5, CSS3, JavaScript. Optimisation SEO et performance.",
    image: "https://via.placeholder.com/400x200.png?text=Projet+1",
    link: "#"
  },
  {
    title: "Mini application React",
    description: "Application simple de gestion de tâches avec React et stockage local. Utilisation de composants fonctionnels et hooks pour la gestion de l’état.",
    image: "https://via.placeholder.com/400x200.png?text=Projet+2",
    link: "#"
  },
  {
    title: "Portfolio personnel",
    description: "Site présentant mes projets et compétences, avec design responsive et navigation fluide. Développé en HTML, CSS et JavaScript.",
    image: "https://via.placeholder.com/400x200.png?text=Projet+3",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

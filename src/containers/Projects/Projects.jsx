import "./Projects.scss";
import Card from "../../components/Card/Card";
import projects from "./projects.js";
import Heading from "../../components/Heading/Heading";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Heading text="My projects" />
      <div className="projects-container">
        {projects &&
          projects.map((project) => (
            <Card
              key={project.id}
              name={project.name}
              tags={project.tags}
              image={project.img}
              description={project.description}
              preview={project.preview}
              code={project.code}
            />
          ))}
      </div>
    </section>
  );
};
export default Projects;

import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        Projects{" "}
        <span>
          (Demos are in the process of being deployed but all the source code is
          still available)
        </span>
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

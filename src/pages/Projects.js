import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import dummyProjects from "../data/dummyProjects";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/projects/")
            .then((res) => {
                if (res.data.length > 0) {
                    setProjects(res.data);
                } else {
                    setProjects(dummyProjects);
                }
            })
            .catch(() => {
                // If backend fails → use dummy data
                setProjects(dummyProjects);
            });
    }, []);

    return (
        <div className="projects-container">
            <h1>My Projects</h1>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            className="thumbnail"
                            src={
                                project.image?.startsWith("http")
                                    ? project.image
                                    : project.image?.startsWith("/")
                                        ? project.image
                                        : `http://127.0.0.1:8000${project.image}`
                            }
                            alt={project.title}
                        />

                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <div className="links">
                                {project.demo_link && (
                                    <a href={project.demo_link} target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                )}
                                {project.github_link && (
                                    <a href={project.github_link} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

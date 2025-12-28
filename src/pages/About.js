import React, { useEffect } from "react";
import "./About.css";

export default function About() {

    // Skill bar animation when page loads
    useEffect(() => {
        const bars = document.querySelectorAll(".skill-fill");
        bars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-percent");
        });
    }, []);

    return (
        <div className="about-wrapper">

            {/* Header */}
            <div className="section-title">
                <h1>About Me</h1>
                <p className="subtitle">Who I am & what I do</p>
            </div>

            {/* Intro */}
            <p className="about-text">
                Hi, I'm <span className="highlight">Mugilesh</span>, a passionate
                <b> Fullstack Python Developer</b> with a strong focus on building
                clean, scalable, and modern web applications.
                I specialize in <b>Django</b> for backend development and <b>React</b>
                for interactive and smooth user interfaces.
            </p>

            {/* Skill Bars */}
            <h2 className="sub-heading">🚀 My Skill Expertise</h2>

            <div className="skills-box">

                <div className="skill-item">
                    <div className="skill-info">
                        <span>Python / Django</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-fill python" data-percent="90%"></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-info">
                        <span>React / JavaScript</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-fill react" data-percent="85%"></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-info">
                        <span>HTML / CSS / Tailwind</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-fill htmlcss" data-percent="80%"></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-info">
                        <span>Databases</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-fill db" data-percent="75%"></div>
                    </div>
                </div>

            </div>

            {/* Experience */}
            <h2 className="sub-heading">💼 Experience</h2>
            <ul className="experience-list">
                <li>
                    <b>Fullstack Developer Intern</b> – Built REST APIs in Django,
                    integrated React UI, worked on auth, deployment & performance tuning.
                </li>
                <li>
                    <b>Freelance Projects</b> – Created portfolio sites, dashboards,
                    e-commerce clones, and custom management systems.
                </li>
            </ul>

            {/* Education */}
            <h2 className="sub-heading">🎓 Education</h2>
            <p className="about-text">
                Pursuing <b>Bachelor’s Degree in Computer Science</b> with strong
                foundation in algorithms, systems, and full-stack development.
            </p>

            {/* Interests */}
            <h2 className="sub-heading">🌱 Interests</h2>
            <p className="about-text">
                I love exploring new technologies, contributing to open-source, and
                learning about <b>AI/ML, Cloud, DevOps, and system design.</b>
            </p>

        </div>
    );
}

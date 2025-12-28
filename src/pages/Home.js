import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">

            <div className="hero">

                {/* LEFT SIDE — TEXT */}
                <div className="hero-left">
                    <h1>
                        Hi, I'm <span className="hero-name">Mugilesh</span>
                    </h1>

                    <h2 className="hero-title">Fullstack Python Developer</h2>

                    <p className="hero-desc">
                        I build modern, scalable and high-performance applications using
                        <b> Django </b> & <b> React</b>.
                        I focus on writing clean code and creating smooth user experiences.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="btn primary-btn">View Projects</Link>
                        <Link to="/about" className="btn secondary-btn">About Me</Link>
                    </div>
                </div>

                {/* RIGHT SIDE — PROFILE IMAGE */}
                <div className="hero-right">
                    <img src="/profile.png" alt="profile" className="hero-img" />
                </div>

            </div>

            {/* Skills banner */}
            <div className="skills-banner">
                <span>Python</span>
                <span>Django</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>API Development</span>
            </div>

        </div>
    );
}

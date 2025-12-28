import React from "react";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <div className="resume-page">

            {/* Page entry animation */}
            <div className="resume-card animate-slide">

                {/* LEFT COLUMN */}
                <div className="resume-left">

                    {/* Profile Image */}
                    <img src="/r-profile.jpg" alt="Profile" className="resume-photo" />

                    {/* Contact Box */}
                    <div className="left-box">
                        <h3>Contact</h3>
                        <p>📧 infomugi123@gmail.com</p>
                        <p>📞 +91 9843360804</p>
                        <p>📍 Tamil Nadu, India</p>
                    </div>

                    {/* Skills */}
                    <div className="left-box">
                        <h3>Skills</h3>
                        <ul>
                            <li>Python</li>
                            <li>Django / DRF</li>
                            <li>React / JS</li>
                            <li>REST API Development</li>
                            <li>MySQL / PostgreSQL</li>
                            <li>Tailwind / CSS</li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="resume-right">

                    {/* Resume Heading */}
                    <div className="resume-header">
                        <h1>Mugilesh</h1>
                        <h2>Fullstack Python Developer</h2>

                        {/* Modern Download Button */}
                        <a href="/Mugilesh-Resume.pdf" download className="download-btn">
                            <FaDownload className="download-icon" />
                            Download PDF
                        </a>
                    </div>

                    {/* Summary */}
                    <section>
                        <h3>Profile Summary</h3>
                        <p>
                            Fullstack Python Developer specializing in Django (backend) and
                            React (frontend). Skilled in REST API development, database
                            systems, authentication, and crafting modern user interfaces.
                            Passionate about clean code and scalable architecture.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <h3>Experience</h3>
                        <ul>
                            <li>
                                <b>Fullstack Developer Intern</b>
                                Built Django REST APIs, integrated React UI components, handled
                                JWT authentication and deployment.
                            </li>
                            <li>
                                <b>Freelance Projects</b>
                                Developed portfolio websites, e-commerce modules, dashboards.
                            </li>
                        </ul>
                    </section>

                    {/* Education */}
                    <section>
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <b>Full Stack Python – FITA Academy</b> (2025) – 85%
                            </li>
                            <li>
                                <b>B.Com – Avinashi Government Arts College</b>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}

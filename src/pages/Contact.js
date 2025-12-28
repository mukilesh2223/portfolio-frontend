import React, { useState } from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaXTwitter, FaWhatsapp, FaCopy } from "react-icons/fa6";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);

    const email = "infomugi123@gmail.com"; // CHANGE THIS

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/contact/", form);
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("Failed to send message");
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <div className="contact-wrapper">


            <div className="contact-card">

                <h1>Contact Me</h1>
                <p className="contact-sub">
                    Feel free to reach out. I’m always open to discussing new projects.
                </p>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>

                {status && <p className="status">{status}</p>}

                {/* 🔗 Social Links */}
                <div className="social-section">
                    <h3>Connect with me</h3>

                    <div className="social-icons">
                        <a href="https://www.instagram.com/mukilesh22_23?igsh=bDB6dmFjN2RpNDgy" target="_blank"><FaInstagram className="icon insta" /></a>
                        <a href="https://www.linkedin.com/in/mugilesh-4045b7312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin className="icon linkedin" /></a>
                        <a href="https://x.com/MugileshB?t=LkJUUjsjMpSkJvLg8-2QPQ&s=09" target="_blank"><FaXTwitter className="icon x" /></a>
                        <a href="https://wa.me/9843360804" target="_blank"><FaWhatsapp className="icon wa" /></a>
                    </div>
                </div>

                {/* 📧 Email copy section */}
                <div className="email-copy-box">
                    <span>{email}</span>
                    <FaCopy className="copy-icon" onClick={copyEmail} />

                    {copied && <span className="copied-text">Copied!</span>}
                </div>

            </div>
        </div>
    );
}

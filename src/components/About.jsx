import { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './About.css';

const About = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 25;
        const y = (e.clientY - window.innerHeight / 2) / 25;
        setMousePos({ x, y });
    };

    return (
        <section id="about" className="about section section-bg-alt" onMouseMove={handleMouseMove}>
            <div className="container">
                <div className="about-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="about-content"
                    >
                        <div className="section-title">
                            <h2>About</h2>
                            <span>/ Overview</span>
                        </div>

                        <h3 className="about-heading" style={{ color: 'var(--color-text-main)' }}>Design With Purpose. Not Just Aesthetics.</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            I’m a Graphic Designer, UI & UX Designer & Marketing/Brand strategist with 4+ years of experience creating brand identities, digital products, and marketing assets that don’t just look good — they perform.
                        </p>

                        <div className="approach-list">
                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: '0.8rem' }}>My approach blends:</h4>
                            <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.25rem' }}>
                                <li>Strategic thinking</li>
                                <li>User-focused design</li>
                                <li>Technical understanding (React & Front-End)</li>
                                <li>Business outcome alignment</li>
                            </ul>
                        </div>

                        <p style={{ color: 'var(--color-text-muted)', marginTop: '1.5rem', lineHeight: '1.6' }}>
                            I work closely with founders, product teams, and growing businesses to build clarity in their brand and confidence in their product.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="about-visual"
                    >
                        <div className="dynamic-pills-container">
                            {/* Abstract Graphic Background */}
                            <div className="abstract-graphic" style={{ pointerEvents: 'none' }}>
                                <div className="circle circle-1"></div>
                                <div className="circle circle-2"></div>
                                <div className="circle circle-3">
                                    <div className="core-dot"></div>
                                </div>
                            </div>

                            <motion.div
                                className="paralax-pill pill-a"
                                animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                Validated stratergy
                            </motion.div>
                            <motion.div
                                className="paralax-pill pill-b"
                                animate={{ x: -mousePos.x * 1.2, y: mousePos.y * 0.8 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                User research
                            </motion.div>
                            <motion.div
                                className="paralax-pill pill-c"
                                animate={{ x: mousePos.x * 0.8, y: -mousePos.y * 1.2 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                Clear deisgn
                            </motion.div>
                            <motion.div
                                className="paralax-pill pill-d"
                                animate={{ x: -mousePos.x * 1.6, y: -mousePos.y * 1.6 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                Business goals
                            </motion.div>
                            <motion.div
                                className="paralax-pill pill-e"
                                animate={{ x: mousePos.x, y: mousePos.y }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                User needs
                            </motion.div>

                            {/* Floating mouse pointers */}
                            <motion.div
                                className="floating-cursor top-left"
                                animate={{ x: mousePos.x * 3, y: mousePos.y * 3 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                >
                                    <MousePointer2 size={25} fill="var(--color-primary)" color="var(--color-primary)" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="floating-cursor bottom-right"
                                animate={{ x: -mousePos.x * 2.5, y: -mousePos.y * 2.5 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                >
                                    <MousePointer2 size={25} fill="var(--color-primary)" color="var(--color-primary)" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

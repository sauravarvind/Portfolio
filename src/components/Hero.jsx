import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'framer-motion';
import { Sparkles, MousePointer2 } from 'lucide-react';
import './Hero.css';

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Check if value is a percentage or contains other chars
    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
    const suffix = value.toString().replace(/[0-9.]/g, '');

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) => {
        if (numericValue % 1 === 0) {
            return Math.floor(latest) + suffix;
        }
        return latest.toFixed(2) + suffix;
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Hero = () => {
    const [index, setIndex] = useState(0);
    const texts = ["Designer", "Strategist", "UI/UX Developer"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section id="home" className="hero section">
                <div className="container hero-container">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="badge hero-badge"
                    >
                        <span className="badge-icon">🚀</span> 140+ Successful projects
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hero-avatar-wrapper"
                    >
                        <div className="hero-avatar">
                            {/* Using a placeholder since user provided a screenshot of the design */}
                            <div className="avatar-placeholder"></div>
                            <div className="tooltip">Let's Connect!</div>
                            <motion.div
                                className="hero-mouse-cursor"
                                animate={{
                                    y: [0, -4, 0],
                                    x: [0, 2, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            >
                                <MousePointer2 size={20} fill="var(--color-primary)" color="var(--color-primary)" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-content"
                    >
                        <h1>Hey, I'm <span className="text-primary">Saurav</span></h1>
                        <p className="hero-subtitle">
                            <span className="changing-text-wrapper">
                                <AnimatePresence mode="popLayout">
                                    <motion.strong
                                        key={texts[index]}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="changing-text"
                                    >
                                        {texts[index]}
                                    </motion.strong>
                                </AnimatePresence>
                            </span>, helping startups and growing businesses turn ideas
                            into clear, conversion-focused and product experiences.
                        </p>

                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-primary">Book a 20-min call</a>
                            <div className="status-pill flex items-center gap-2">
                                <span className="status-dot"></span> Available for new projects
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-footer"
            >
                <div className="container">

                    <div className="hero-footer-stats-grid">
                        <div className="stat-item">
                            <span className="stat-number"><Counter value="10" />+</span>
                            <span className="stat-label">Global Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter value="50" />+</span>
                            <span className="stat-label">Indian Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter value="4" />+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter value="40" />%</span>
                            <span className="stat-label">Repetitive Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter value="88.87" />%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                    </div>
                    <div className="hero-footer-cta-text text-center">
                        <p><strong>Book a 20-minute discovery call</strong> to explore fit and scope | <strong>Request a proposal</strong> for your project</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;

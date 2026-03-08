import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Akart',
        description: 'Transforming a local art center into the pre-eminent regional brand for arts & culture.',
        color: '#e2e8f0', // Placeholder for image background
    },
    {
        id: 2,
        title: 'Enteeon.',
        description: 'Brand identity and e-commerce for a modern, ecologically friendly fashion brand.',
        color: '#3f6212', // Placeholder for image background
    },
    {
        id: 3,
        title: 'We architect',
        description: 'Positioning a fast-growing architectural firm to stand out in a predictable SaaS economy environment.',
        color: '#0ea5e9', // Placeholder for image background
    },
    {
        id: 4,
        title: 'City Care Cafe.',
        description: 'Complete brand ID system for a locally sourced coffee roaster & cafe.',
        color: '#1e3a8a', // Placeholder for image background
    },
    {
        id: 5,
        title: 'CRNC Finance.',
        description: 'Complete brand identity architecture, digital product layout & app interface.',
        color: '#1e293b', // Placeholder for image background
    },
    {
        id: 6,
        title: 'Dreamy Domingo.',
        description: 'Brand identity system combining modern aesthetics with organic shapes.',
        color: '#16a34a', // Placeholder for image background
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section section-bg-alt">
            <div className="container">

                <div className="section-title justify-center text-center flex-col items-center">
                    <h2>Portfolio <span className="text-muted">/ My works</span></h2>
                    <p className="portfolio-subtitle">Here are some selected works to help you understand my style, process and what I can do for you.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="portfolio-card"
                        >
                            <div
                                className="portfolio-image"
                                style={{ backgroundColor: project.color }}
                            >
                                {/* Placeholders for project images */}
                                <span className="view-project-btn">View <ArrowUpRight size={16} /></span>
                            </div>
                            <div className="portfolio-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="portfolio-actions text-center">
                    <a href="#contact" className="btn btn-primary btn-lg">Book a call to discuss</a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

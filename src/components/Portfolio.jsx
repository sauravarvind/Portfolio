import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Misez',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 110.png',
    },
    {
        id: 2,
        title: 'Enteeon',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 111.png',
    },
    {
        id: 3,
        title: 'Hollow-bricks',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 113.png',
    },
    {
        id: 4,
        title: 'SVM Grand-Cafe',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 114.png',
    },
    {
        id: 5,
        title: 'KSRCT Research',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 115.png',
    },
    {
        id: 6,
        title: 'Enteeon-Package design',
        description: 'Consistent brand presence, faster creative production, stronger market positioning.',
        image: '/smaller_view/Frame 117.png',
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
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <a href="https://www.linkedin.com/services/page/62a9323353ab1894bb/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">See more</a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Brand Guidelines Development',
        description: 'Building scalable visual identities, clear core values, and structured design languages.',
        image: '/Saurav Linkedin images/Brand Guidelines developement.png',
    },
    {
        id: 2,
        title: 'Brand Storytelling',
        description: 'Crafting authentic narratives that engage audiences and build meaningful emotional connections.',
        image: '/Saurav Linkedin images/Brand story telling.png',
    },
    {
        id: 3,
        title: 'Brands Creating Impacts',
        description: 'Designing purpose-driven identities that resonate deeply and drive real-world business results.',
        image: '/Saurav Linkedin images/Brands creatting impacts.png',
    },
    {
        id: 4,
        title: 'Infographics & Documentation',
        description: 'Transforming complex data into visually engaging, easy-to-understand, and accessible formats.',
        image: '/Saurav Linkedin images/Infographics and other Documentations.png',
    },
    {
        id: 5,
        title: 'Logo Designs',
        description: 'Creating timeless, memorable symbols that capture the essence of your unique brand identity.',
        image: '/Saurav Linkedin images/Logo designs.png',
    },
    {
        id: 6,
        title: 'Marketing Pitch Decks',
        description: 'Designing strategic, high-converting presentations that captivate investors and drive clear action.',
        image: '/Saurav Linkedin images/Marketing Pitch deck.png',
    },
    {
        id: 7,
        title: 'Package Designing',
        description: 'Developing eye-catching, sustainable packaging solutions that stand out on modern retail shelves.',
        image: '/Saurav Linkedin images/Package designing.png',
    },
    {
        id: 8,
        title: 'Conveying the Vision',
        description: 'Translating abstract ideas into compelling visuals that perfectly align with your business goals.',
        image: '/Saurav Linkedin images/conveying the vision.png',
    },
];

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="portfolio" className="portfolio section section-bg-alt">
            <div className="container">

                <div className="section-title justify-center text-center flex-col items-center">
                    <h2>Portfolio <span className="text-muted">/ My works</span></h2>
                    <p className="portfolio-subtitle">Here are some selected works to help you understand my style, process and what I can do for you.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.slice(0, 6).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="portfolio-card"
                        >
                            <div className="portfolio-image" onClick={() => setSelectedImage(project.image)}>
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

                <div className="portfolio-grid portfolio-grid--centered">
                    {projects.slice(6, 8).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                            className="portfolio-card"
                        >
                            <div className="portfolio-image" onClick={() => setSelectedImage(project.image)}>
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

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="portfolio-modal-overlay"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8 / 1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="portfolio-modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="portfolio-modal-close"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X size={24} />
                                </button>
                                <img src={selectedImage} alt="Fullscreen portfolio" className="portfolio-modal-image" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Portfolio;

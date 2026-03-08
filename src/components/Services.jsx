import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 'brand',
        title: 'Brand Design',
        subtitle: 'Strategy & Identity',
        description: 'Create a visual system that communicates your values and allows clients to connect with your business.',
        deliverables: 'Deliverables: Brand Audit, Logo & Variations, Visual Identity System, Usage guidelines',
        outcome: 'Outcome: Build trust, visual presence, brand that is memorable, strong emotional positioning.',
    },
    {
        id: 'logo',
        title: 'Logo Design',
        subtitle: 'Memorable Marks',
        description: 'Crafting unique and recognizable logo marks for distinct market presence.',
        deliverables: 'Deliverables: Logo concept, vector files, color variations.',
        outcome: 'Outcome: Instant recognition and versatile brand application.',
    },
    {
        id: 'packaging',
        title: 'Packaging Design',
        subtitle: 'Physical Product Presence',
        description: 'Designing product packaging that stands out on shelves and delights customers.',
        deliverables: 'Deliverables: Box design, label design, dielines, 3D mockups.',
        outcome: 'Outcome: Better retail positioning and unboxing experience.',
    },
    {
        id: 'uiux',
        title: 'UI/UX Web Design',
        subtitle: 'Digital Products',
        description: 'User interfaces and experiences for modern digital applications.',
        deliverables: 'Deliverables: Wireframes, Visual designs, Prototypes.',
        outcome: 'Outcome: Higher conversion rates and delighted users.',
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0].id);

    const activeContent = servicesData.find(s => s.id === activeService);

    return (
        <section id="services" className="services section">
            <div className="container">

                <div className="section-title justify-center text-center">
                    <h2>Services</h2>
                    <span>/ You can reach me for</span>
                </div>

                <div className="services-container">
                    {/* Sidebar — desktop only, hidden on mobile via CSS */}
                    <div className="services-sidebar">
                        <ul className="services-nav">
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <button
                                        className={`service-btn ${activeService === service.id ? 'active' : ''}`}
                                        onClick={() => setActiveService(service.id)}
                                    >
                                        {service.title}
                                        {activeService === service.id && <ArrowRight size={16} />}
                                    </button>
                                </li>
                            ))}
                            <li><button className="service-btn">Marketing Material</button></li>
                            <li><button className="service-btn">Social Media Design</button></li>
                            <li><button className="service-btn">Print/Poster Design</button></li>
                        </ul>
                    </div>

                    {/* Mobile-only horizontal tab bar */}
                    <ul className="services-tab-bar">
                        {servicesData.map((service) => (
                            <li key={service.id}>
                                <button
                                    className={`service-tab-btn ${activeService === service.id ? 'active' : ''}`}
                                    onClick={() => setActiveService(service.id)}
                                >
                                    {service.title}
                                </button>
                            </li>
                        ))}
                        <li><button className="service-tab-btn">Marketing Material</button></li>
                        <li><button className="service-tab-btn">Social Media Design</button></li>
                        <li><button className="service-tab-btn">Print/Poster Design</button></li>
                    </ul>

                    {/* Service Content */}
                    <div className="service-content-area">
                        {/* Single image */}
                        <div className="service-single-image item-1"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeContent.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="service-details"
                            >
                                <div className="service-header">
                                    <h3><span className="text-primary">{activeContent.title}</span> — {activeContent.subtitle}</h3>
                                </div>

                                <p className="service-desc">{activeContent.description}</p>

                                <div className="service-meta">
                                    <p><strong>{activeContent.deliverables.split(':')[0]}:</strong> {activeContent.deliverables.split(':')[1]}</p>
                                    <p><strong>{activeContent.outcome.split(':')[0]}:</strong> {activeContent.outcome.split(':')[1]}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;

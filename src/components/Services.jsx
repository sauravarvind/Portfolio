import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Palette,
    Aperture,
    Package,
    Layout,
    Megaphone,
    Share2,
    Printer,
    CheckCircle2,
    Smartphone,
    PenTool,
    Type,
    Layers,
    ArrowRight
} from 'lucide-react';
import './Services.css';

// ── Service Data ──
const servicesData = [
    {
        id: 'brand',
        title: 'Brand Design',
        subtitle: 'Identity & Strategy',
        description: 'Create a visual system that communicates your values and allows clients to connect with your business on a deeper emotional level.',
        deliverables: 'Deliverables: Brand Audit, Logo Variations, Visual Identity System, Style Guides.',
        outcome: 'Outcome: Build trust, visual presence, and a memorable brand with strong market positioning.',
    },
    {
        id: 'logo',
        title: 'Logo Design',
        subtitle: 'Memorable Marks',
        description: 'Crafting unique and recognizable logo marks that serve as the cornerstone of your brand identification.',
        deliverables: 'Deliverables: Logo concept, Vector source files, Monochrome & Color versions.',
        outcome: 'Outcome: Instant recognition and versatile brand application across all touchpoints.',
    },
    {
        id: 'packaging',
        title: 'Packaging Design',
        subtitle: 'Physical Presence',
        description: 'Designing product packaging that stands out on retail shelves and creates a delightful unboxing experience.',
        deliverables: 'Deliverables: Box design, Label design, Dielines, 3D mockups.',
        outcome: 'Outcome: Superior retail positioning and increased perceived product value.',
    },
    {
        id: 'uiux',
        title: 'UI/UX Web Design',
        subtitle: 'Digital Products',
        description: 'User-centric interfaces and experiences designed for high conversion and effortless digital interaction.',
        deliverables: 'Deliverables: Wireframes, Visual designs, Interactive Prototypes, Design Systems.',
        outcome: 'Outcome: Higher conversion rates and significantly improved user satisfaction scores.',
    },
    {
        id: 'marketing',
        title: 'Marketing Material',
        subtitle: 'Campaigns & Growth',
        description: 'Design scalable marketing assets that align with your brand voice and drive measurable business goals.',
        deliverables: 'Deliverables: Pitch decks, Presentation templates, Sales sheets, Brochures.',
        outcome: 'Outcome: Professional business presence and higher quality lead generation.',
    },
    {
        id: 'social',
        title: 'Social Media Design',
        subtitle: 'Digital Engagement',
        description: 'Captivating social content that stops the scroll and builds a vibrant community around your brand.',
        deliverables: 'Deliverables: Post templates, Story layouts, Profile kits, Ad creatives.',
        outcome: 'Outcome: Visual consistency across platforms and increased audience engagement.',
    },
    {
        id: 'print',
        title: 'Print/Poster Design',
        subtitle: 'Physical Branding',
        description: 'High-quality print designs that translate your brand into tangible, premium physical experiences.',
        deliverables: 'Deliverables: Event posters, Business cards, Signage, Stationery set.',
        outcome: 'Outcome: Tangible brand credibility and memorable physical presence.',
    }
];

// ── Animation Variants ──
const float = (duration = 5, delay = 0, yOffset = 15) => ({
    initial: { y: 0 },
    animate: {
        y: [-yOffset, yOffset],
        transition: { duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay }
    }
});

const drift = (duration = 6, delay = 0, xOffset = 10) => ({
    initial: { x: 0 },
    animate: {
        x: [-xOffset, xOffset],
        transition: { duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay }
    }
});

// ── UI Components ──
const GlassPanel = ({ children, className, variants, style }) => (
    <motion.div className={`floating-glass-panel ${className}`} variants={variants} initial="initial" animate="animate" style={style}>
        <div className="panel-glow"></div>
        {children}
    </motion.div>
);

const VisualRenderer = ({ type }) => {
    switch (type) {
        case 'brand':
            return (
                <>
                    <GlassPanel className="p-swatches" variants={float(6, 0)}>
                        <div className="panel-dots"><div className="p-dot"></div><div className="p-dot"></div></div>
                        <div style={{ padding: '15px' }}>
                            <div className="c-swatch" style={{ background: 'linear-gradient(180deg, #443ae9 0%, #3229E3 100%)' }}></div>
                            <div className="c-swatch" style={{ background: '#9333ea', opacity: 0.6 }}></div>
                            <div className="c-swatch" style={{ background: '#4f46e5', opacity: 0.3 }}></div>
                            <div className="c-line" style={{ width: '80%', marginTop: '15px' }}></div>
                        </div>
                    </GlassPanel>
                    <motion.div className="floating-glass-panel" variants={float(4, 0.5)} initial="initial" animate="animate" style={{ width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(50, 41, 227, 0.15)', borderColor: 'rgba(50, 41, 227, 0.3)', position: 'absolute' }}>
                        <Palette size={24} color="#3229E3" />
                    </motion.div>
                    <GlassPanel className="p-type" variants={drift(8, 1)}>
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '10px', color: '#999', fontWeight: 800 }}>TYPE</div>
                            <div style={{ fontSize: '28px', fontWeight: 900, color: '#111827' }}>Inter</div>
                        </div>
                    </GlassPanel>
                </>
            );
        case 'logo':
            return (
                <>
                    <div className="vector-grid"></div>
                    <GlassPanel className="p-logo-main" variants={float(5, 0)}>
                        <Aperture size={72} strokeWidth={1} color="#3229E3" />
                    </GlassPanel>
                    <motion.div className="floating-glass-panel" variants={drift(6, 0.2)} initial="initial" animate="animate" style={{ top: '15%', right: '15%', padding: '10px', position: 'absolute' }}>
                        <PenTool size={20} color="#3229E3" />
                    </motion.div>
                </>
            );
        case 'packaging':
            return (
                <>
                    <GlassPanel className="p-poster" variants={float(7, 0)} style={{ width: '160px', height: '220px', transform: 'rotate(-5deg)' }}>
                        <div className="panel-dots"><div className="p-dot"></div></div>
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <Package size={80} strokeWidth={1} color="#3229E3" style={{ opacity: 0.6 }} />
                            <div className="c-line" style={{ margin: '20px auto 10px' }}></div>
                        </div>
                    </GlassPanel>
                </>
            );
        case 'uiux':
            return (
                <>
                    <GlassPanel className="p-browser" variants={float(6, 0)}>
                        <div className="panel-dots"><div className="p-dot" style={{ background: '#ef4444' }}></div><div className="p-dot" style={{ background: '#fbbf24' }}></div><div className="p-dot" style={{ background: '#22c55e' }}></div></div>
                        <div style={{ padding: '15px' }}>
                            <div className="c-line" style={{ width: '40%', height: '10px', background: 'linear-gradient(180deg, #443ae9 0%, #3229E3 100%)' }}></div>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}><div style={{ width: '100%', height: '50px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}></div></div>
                        </div>
                    </GlassPanel>
                    <GlassPanel className="p-phone" variants={float(4, 0.5)}>
                        <div style={{ padding: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '5px', width: '20px', background: 'rgba(0,0,0,0.05)', alignSelf: 'center', borderRadius: '10px', marginBottom: '10px' }}></div>
                            <div style={{ flex: 1, background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}></div>
                            <div className="c-btn"></div>
                        </div>
                    </GlassPanel>
                </>
            );
        case 'marketing':
            return (
                <>
                    <GlassPanel variants={float(8, 0)} style={{ width: '220px', height: '110px', top: '15%', padding: '15px', position: 'absolute', left: '10%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Megaphone size={28} color="#3229E3" strokeWidth={1.5} />
                            <div style={{ flex: 1 }}><div className="c-line" style={{ width: '90%' }}></div><div className="c-line" style={{ width: '50%' }}></div></div>
                        </div>
                    </GlassPanel>
                    <GlassPanel variants={drift(6, 0.3)} style={{ width: '160px', height: '160px', bottom: '10%', right: '10%', transform: 'rotate(5deg)', position: 'absolute' }}>
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#3229E3', marginBottom: '10px' }}>GROWTH</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '70px' }}>
                                <div style={{ width: '25%', height: '40%', background: '#3229E3', opacity: 0.2 }}></div>
                                <div style={{ width: '25%', height: '100%', background: 'linear-gradient(180deg, #443ae9 0%, #3229E3 100%)' }}></div>
                                <div style={{ width: '25%', height: '60%', background: '#3229E3', opacity: 0.4 }}></div>
                            </div>
                        </div>
                    </GlassPanel>
                </>
            );
        case 'social':
            return (
                <>
                    <GlassPanel className="p-social" variants={float(5, 0)}>
                        <div className="panel-dots"><div className="p-dot"></div></div>
                        <div style={{ padding: '12px' }}>
                            <div style={{ height: '70px', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', marginBottom: '10px' }}></div>
                            <div style={{ display: 'flex', gap: '8px' }}><div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#3229E3' }}></div><div style={{ flex: 1 }}><div className="c-line" style={{ width: '100%' }}></div></div></div>
                        </div>
                    </GlassPanel>
                    <motion.div className="floating-glass-panel" variants={drift(4, 0.4)} initial="initial" animate="animate" style={{ top: '10%', right: '15%', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                        <Share2 size={24} color="#3229E3" />
                    </motion.div>
                </>
            );
        case 'print':
            return (
                <>
                    <GlassPanel variants={float(9, 0)} style={{ width: '180px', height: '240px', transform: 'rotate(2deg)', padding: '20px', position: 'absolute' }}>
                        <Printer size={32} color="#3229E3" strokeWidth={1} style={{ marginBottom: '20px' }} />
                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#111827' }}>POSTER</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, opacity: 0.08, color: '#111827' }}>DESIGN</div>
                    </GlassPanel>
                </>
            );
        default: return null;
    }
};

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0].id);
    const activeContent = servicesData.find(s => s.id === activeService);

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-title text-center">
                    <span>Expertise</span>
                    <h2>Services Provided</h2>
                </div>

                <div className="services-shell">
                    {/* Left Sidebar */}
                    <div className="services-sidebar">
                        <ul className="services-nav">
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <button
                                        className={`service-btn ${activeService === service.id ? 'active' : ''}`}
                                        onClick={() => setActiveService(service.id)}
                                    >
                                        <span className="btn-label">{service.title}</span>
                                        {activeService === service.id && (
                                            <motion.div layoutId="nav-arrow" className="active-indicator">
                                                <ArrowRight size={16} />
                                            </motion.div>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Content Panel */}
                    <div className="services-content-panel">
                        <div className="services-visual-display">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="visual-container"
                                >
                                    <VisualRenderer type={activeService} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="services-text-display">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeContent.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="service-content-title">
                                        <span className="text-primary">{activeContent.title}</span> — {activeContent.subtitle}
                                    </h3>
                                    <p className="service-content-desc">{activeContent.description}</p>

                                    <div className="service-content-meta">
                                        <div className="meta-box">
                                            <span className="meta-label">Deliverables</span>
                                            <p className="meta-text">{activeContent.deliverables.replace('Deliverables: ', '')}</p>
                                        </div>
                                        <div className="meta-box">
                                            <span className="meta-label">Output</span>
                                            <p className="meta-text">{activeContent.outcome.replace('Outcome: ', '')}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

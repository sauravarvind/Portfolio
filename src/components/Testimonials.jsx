import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Saurav's ability to translate our complex vision into a cohesive brand guideline was game-changing. Our team now works 2x faster with a consistent identity that truly scales.",
        author: "Arvind Kumar",
        role: "Founder, Dubai, UAE",
    },
    {
        id: 2,
        text: "The marketing pitch deck Saurav designed was instrumental in our latest seed round. He crafted a visual narrative that made our value proposition undeniable to investors.",
        author: "Sarah Chen",
        role: "Head of Growth, USA",
    },
    {
        id: 3,
        text: "We approached Saurav for package design, but he delivered a full brand story. The impact on our shelf presence was immediate, and his attention to logo detail is world-class.",
        author: "Marcus Thorne",
        role: "Creative Director, UK",
    },
    {
        id: 4,
        text: "Highly impactful documentation. Saurav's infographics simplified our research findings in a way that resonated perfectly with our key stakeholders and partners.",
        author: "Dr. Emily Ross",
        role: "Research Lead, Australia",
    },
    {
        id: 5,
        text: "Incredible attention to the target audience. Saurav's strategy for our market launch helped us secure our first 1000 customers in record time. Highly recommend.",
        author: "James Wilson",
        role: "Strategic Analyst, Canada",
    },
    {
        id: 6,
        text: "The brand storytelling Saurav implemented across our channels gave us the professional edge we needed. He's more than just a designer—he's a brand partner.",
        author: "Elena Rodriguez",
        role: "Marketing Manager, Spain",
    }
];

const Testimonials = () => {
    // Group into pages of 2
    const itemsPerPage = 2;
    const pages = [];
    for (let i = 0; i < testimonials.length; i += itemsPerPage) {
        pages.push(testimonials.slice(i, i + itemsPerPage));
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + pages.length) % pages.length);
    };

    return (
        <section id="testimonials" className="testimonials section section-bg-alt">
            <div className="container">

                <div className="section-title justify-center text-center">
                    <h2>Testimonials</h2>
                    <span>/ Recommendations</span>
                </div>

                <div className="testimonials-carousel-container">
                    <button className="nav-btn prev-btn" onClick={() => paginate(-1)}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="carousel-inner">
                        <AnimatePresence initial={false} custom={direction} mode='wait'>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 25 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="testimonial-page"
                            >
                                {pages[currentIndex].map((testimonial) => (
                                    <div key={testimonial.id} className="testimonial-card">
                                        <div className="quote-icon">
                                            <Quote size={32} />
                                        </div>
                                        <p className="testimonial-text">"{testimonial.text}"</p>
                                        <div className="testimonial-author">
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="nav-btn next-btn" onClick={() => paginate(1)}>
                        <ChevronRight size={24} />
                    </button>

                    <div className="carousel-dots-container">
                        <div className="carousel-dots">
                            {pages.map((_, i) => (
                                <button 
                                    key={i} 
                                    className={`dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setDirection(i > currentIndex ? 1 : -1);
                                        setCurrentIndex(i);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

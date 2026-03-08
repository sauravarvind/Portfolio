import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Wireframes, visual systems, prototypes and iterations.",
        author: "Matevž Levec",
        role: "CEO",
    },
    {
        id: 2,
        text: "Wireframes, visual systems, prototypes and iterations.",
        author: "Omobolaji Ajibade",
        role: "UX/UI Designer",
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section section-bg-alt">
            <div className="container">

                <div className="section-title justify-center text-center">
                    <h2>Testimonials</h2>
                    <span>/ Recommendations</span>
                </div>

                <div className="testimonials-wrapper">
                    <button className="nav-btn prev-btn"><ChevronLeft size={20} /></button>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="testimonial-card"
                            >
                                <div className="quote-icon">
                                    <Quote size={32} />
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button className="nav-btn next-btn"><ChevronRight size={20} /></button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

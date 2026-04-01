import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    return (
        <section id="contact" className="cta section">
            <div className="container text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="cta-content"
                >
                    <h2>
                        Ready to start? <a href="https://calendly.com/saurav-imagines/30min?back=1&month=2026-04" target="_blank" rel="noopener noreferrer" className="text-primary hover-underline">Book a 20-minute<br />discovery call</a> or <a href="https://www.linkedin.com/in/saurav-arvind/" target="_blank" rel="noopener noreferrer" className="text-primary hover-underline">Collaborate on a pilot.</a>
                    </h2>

                    <div className="cta-action">
                        <a href="mailto:saurav.imagines@gmail.com" className="btn btn-primary btn-lg">Start a Project</a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CTA;

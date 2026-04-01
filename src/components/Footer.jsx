import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">© Saurav 2024</p>

                    <div className="footer-links">
                        <a href="https://www.linkedin.com/in/sauravarvind/" target="_blank" rel="noopener noreferrer" className="footer-link"><span className="link-icon">↗</span> LinkedIn</a>
                        <a href="https://github.com/sauravarvind" target="_blank" rel="noopener noreferrer" className="footer-link"><span className="link-icon">↗</span> GitHub</a>
                        <a href="mailto:sauravarvinds@gmail.com" className="footer-link"><span className="link-icon">↗</span> Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">© Saurav 2024</p>

                    <div className="footer-links">
                        <a href="#" className="footer-link"><span className="link-icon">↗</span> LinkedIn</a>
                        <span className="divider">Have a wonderful and blessed day!</span>
                        <a href="#" className="footer-link"><span className="link-icon">↗</span> GitHub</a>
                        <span className="divider">Have a wonderful and blessed day!</span>
                        <a href="#" className="footer-link"><span className="link-icon">↗</span> Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

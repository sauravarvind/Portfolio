import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Clock, Zap, Target, TrendingDown, TrendingUp } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const [currency, setCurrency] = useState('USD');
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);

    const rates = {
        USD: { symbol: '$', rate: 1 },
        AUD: { symbol: 'A$', rate: 1.54 },
        INR: { symbol: '₹', rate: 82.95 },
        EUR: { symbol: '€', rate: 0.92 }
    };

    const baseHourly = 50;
    const currentRate = (baseHourly * rates[currency].rate).toFixed(0);
    const symbol = rates[currency].symbol;

    const estimatedHours = billingCycle === 'monthly' ? 40 : 400;
    const totalPrice = (currentRate * estimatedHours).toLocaleString();

    // Data for the comparison bar chart
    const comparisonData = [
        { name: 'Big Agencies', value: 150, color: '#94a3b8' },
        { name: 'Top Freelancers', value: 100, color: '#cbd5e1' },
        { name: 'Me (Saurav)', value: 50, color: 'var(--color-primary)' },
    ];

    return (
        <section id="pricing" className="pricing section">
            <div className="container">

                <div className="section-title justify-center text-center">
                    <h2>Pricing</h2>
                    <span>/ Investment</span>
                </div>

                {/* Top Toggle Area */}
                <div className="pricing-top-controls">
                    <div className="billing-toggle-wrapper">
                        <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
                        <button
                            className={`toggle-btn ${billingCycle === 'annual' ? 'annual' : ''}`}
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                        >
                            <motion.div
                                layout
                                className="toggle-knob"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={billingCycle === 'annual' ? 'active' : ''}>Annual <span className="discount-badge">-15%</span></span>
                    </div>
                    <p className="startup-note">
                        <Target size={14} /> Negotiable or starting points available for high-potential startups
                    </p>
                </div>

                <div className="pricing-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pricing-info-side"
                    >
                        <div className="rate-card">
                            <div className="rate-header">
                                <span className="rate-label">Base Hourly Rate</span>
                                <div className="currency-selector-wrapper">
                                    <div
                                        className="currency-selector"
                                        onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                                    >
                                        <Globe size={14} className="selector-icon" />
                                        <span className="selected-currency">{currency} ({rates[currency].symbol})</span>
                                        <ChevronDown
                                            size={14}
                                            className={`selector-arrow ${showCurrencyMenu ? 'open' : ''}`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {showCurrencyMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="currency-dropdown-custom"
                                            >
                                                {Object.keys(rates).map((code) => (
                                                    <div
                                                        key={code}
                                                        className={`currency-option ${currency === code ? 'active' : ''}`}
                                                        onClick={() => {
                                                            setCurrency(code);
                                                            setShowCurrencyMenu(false);
                                                        }}
                                                    >
                                                        {code} ({rates[code].symbol})
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="rate-value">
                                <span className="currency-sym">{symbol}</span>
                                <span className="price">{currentRate}</span>
                                <span className="unit">/ hr</span>
                            </div>
                        </div>

                        <div className="pricing-cards-container">
                            <motion.div
                                key={`scope-${billingCycle}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="pricing-data-card"
                            >
                                <div className="card-gloss"></div>
                                <Clock size={20} className="text-primary" />
                                <div className="p-card-label">Project Scope</div>
                                <div className="p-card-value">{estimatedHours} hrs <span className="sub">est.</span></div>
                            </motion.div>

                            <motion.div
                                key={`total-${billingCycle}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="pricing-data-card investment-card"
                            >
                                <div className="card-gloss"></div>
                                <Zap size={20} />
                                <div className="p-card-label">Total Investment</div>
                                <div className="p-card-value">{symbol}{totalPrice}</div>
                            </motion.div>
                        </div>

                        <div className="pricing-actions">
                            <a href="#contact" className="btn btn-primary">Book a discovery call</a>
                            <a href="#contact" className="btn btn-outline" style={{ display: 'none' }}>Consulting</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pricing-visual-side"
                    >
                        <div className="comparison-chart-container interactive-chart">
                            <div className="chart-header">
                                <h3>Market Rate Comparison</h3>
                                <p>Standard hourly rates (USD)</p>
                            </div>

                            <div className="bar-chart">
                                {comparisonData.map((item, i) => (
                                    <div key={item.name} className="bar-row">
                                        <div className="bar-label">
                                            {item.name}
                                            {item.name.includes('Big') && <span className="reaction-pill overhead">😱 High Overhead <TrendingDown size={12} className="text-red" /></span>}
                                            {item.name.includes('Top') && <span className="reaction-pill overhead">💸 Premium Fee <TrendingDown size={12} className="text-red" /></span>}
                                            {item.name.includes('Me') && <span className="reaction-pill savings">🚀 Best Value <TrendingUp size={12} strokeWidth={3} className="text-green" /></span>}
                                        </div>
                                        <div className="bar-wrapper">
                                            <motion.div
                                                className="bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.value / 150) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 + (i * 0.1) }}
                                                style={{
                                                    background: item.name.includes('Me')
                                                        ? 'linear-gradient(90deg, var(--color-primary) 0%, #443ae9 100%)'
                                                        : item.color
                                                }}
                                            >
                                                <span className="bar-value">${item.value}</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating Reaction Pills / Arrows */}
                            <div className="floating-reactions">
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                    className="reaction-floating pill-white"
                                >
                                    🎯 Value Focused
                                </motion.div>
                            </div>

                            <div className="chart-footer">
                                <p>Premium agency results without the agency bloating. Simple as that.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="pricing-note">
                    <span className="note-badge">Note:</span> Specific project costs vary based on complexity and timeline requirements.
                </div>

            </div>
        </section>
    );
};

export default Pricing;

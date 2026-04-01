import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Activity, Search, Lightbulb, Palette, Fingerprint, Zap, BarChart, Code, Brush } from 'lucide-react';
import './Process.css';

const steps = [
    {
        id: 1,
        phase: 'Phase 1',
        label: 'Discovery Call',
        icon: Phone,
        color: '#3229E3',
        description: 'Understanding your goals, challenges and vision.',
    },
    {
        id: 2,
        phase: 'Phase 2a',
        label: 'Audit & Analysis',
        icon: Activity,
        color: '#5247ff',
        description: 'Deep dive into your brand, competitors and market.',
        isSub: true,
    },
    {
        id: 3,
        phase: 'Phase 2b',
        label: 'User Research',
        icon: Search,
        color: '#5247ff',
        description: 'Empathy mapping, surveys and user behavior insights.',
        isSub: true,
    },
    {
        id: 4,
        phase: 'Phase 3',
        label: 'Strategy & Roadmap',
        icon: Lightbulb,
        color: '#3229E3',
        description: 'A clear, validated strategy with measurable milestones.',
    },
    {
        id: 5,
        phase: 'Phase 4a',
        label: 'UX Design',
        icon: Palette,
        color: '#7b72ff',
        description: 'Wireframes, user flows and information architecture.',
        isSub: true,
    },
    {
        id: 6,
        phase: 'Phase 4b',
        label: 'Prototyping',
        icon: Fingerprint,
        color: '#7b72ff',
        description: 'Interactive prototypes tested and refined with users.',
        isSub: true,
    },
    {
        id: 7,
        phase: 'Phase 5',
        label: 'Execution',
        icon: Zap,
        color: '#3229E3',
        description: 'Shipping pixel-perfect designs and components.',
    },
    {
        id: 8,
        phase: 'Outcome A',
        label: 'Marketing',
        icon: BarChart,
        color: '#3229E3',
        description: 'Campaigns, pitch decks and brand storytelling.',
        isEnd: true,
    },
    {
        id: 9,
        phase: 'Outcome B',
        label: 'Development',
        icon: Code,
        color: '#3229E3',
        description: 'Production-ready hand-off and React implementation.',
        isEnd: true,
    },
    {
        id: 10,
        phase: 'Outcome C',
        label: 'Graphic Design',
        icon: Brush,
        color: '#3229E3',
        description: 'Visual identity, packaging and print-ready assets.',
        isEnd: true,
    },
];

// SVG path that the ball travels — a smooth snake through the diagram
// Desktop viewBox: 1100 x 500
const BALL_PATH = `
    M 60 250
    L 180 250
    Q 210 250 210 220 L 210 140
    Q 210 110 240 110 L 380 110
    Q 410 110 410 140 L 410 250
    Q 410 280 440 280 L 560 280
    Q 590 280 590 250 L 590 140
    Q 590 110 620 110 L 760 110
    Q 790 110 790 140 L 790 250
    Q 790 280 820 280 L 940 280
    Q 970 280 970 250 L 970 140
    Q 970 110 1000 110 L 1080 110
    M 940 280
    L 940 360
    Q 940 390 970 390 L 1080 390
    M 790 250
    L 790 360
    Q 790 390 820 390
`;

// Node absolute positions in the 1100×500 SVG coordinate space
const NODE_POSITIONS = [
    { id: 1,  cx: 120,  cy: 250 },  // Discovery
    { id: 2,  cx: 310,  cy: 110 },  // Audit
    { id: 3,  cx: 310,  cy: 390 },  // Research  — hidden on svg, shown on path side
    { id: 4,  cx: 500,  cy: 280 },  // Strategy
    { id: 5,  cx: 690,  cy: 110 },  // UX Design
    { id: 6,  cx: 690,  cy: 390 },  // Prototyping
    { id: 7,  cx: 880,  cy: 280 },  // Execution
    { id: 8,  cx: 1070, cy: 110 },  // Marketing
    { id: 9,  cx: 1070, cy: 280 },  // Dev
    { id: 10, cx: 1070, cy: 390 },  // Graphic
];

const ProcessNode = ({ step, index, inView }) => {
    const Icon = step.icon;
    return (
        <motion.div
            className={`process-pill ${step.isSub ? 'process-pill--sub' : ''} ${step.isEnd ? 'process-pill--end' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.5, ease: 'easeOut' }}
        >
            <div className="process-pill__icon">
                <Icon size={step.isSub ? 14 : 18} />
            </div>
            <div className="process-pill__text">
                <span className="process-pill__phase">{step.phase}</span>
                <span className="process-pill__label">{step.label}</span>
                <span className="process-pill__desc">{step.description}</span>
            </div>
        </motion.div>
    );
};

const Process = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [ballProgress, setBallProgress] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = null;
        const duration = 3200;
        const tick = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setBallProgress(p);
            if (p < 1) requestAnimationFrame(tick);
        };
        const raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView]);

    return (
        <section id="process" className="process section" ref={ref}>
            <div className="container">
                <div className="section-title justify-center text-center">
                    <h2>Process</h2>
                    <span>/ Architecture of Growth</span>
                </div>
                <p className="process-subtitle text-center">
                    Continuous iteration ensures every pixel serves a purpose and every interaction feels natural.
                </p>

                {/* ─── Desktop / Tablet Diagram ─── */}
                <div className="process-diagram" aria-hidden="true">
                    <svg
                        className="process-svg"
                        viewBox="0 0 1100 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="track-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                            </linearGradient>
                            
                            <radialGradient id="ball-grad">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="40%" stopColor="var(--color-primary)" />
                                <stop offset="100%" stopColor="var(--color-primary)" />
                            </radialGradient>

                            <filter id="ball-glow">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-primary)" opacity="0.3" />
                            </marker>
                        </defs>

                        {/* ── Track (background line) ── */}
                        <motion.path
                            d="M 90 250 C 185 250 185 140 280 140 C 375 140 375 250 470 250 C 565 250 565 140 660 140 C 755 140 755 250 850 250 C 945 250 945 140 1040 140"
                            stroke="url(#track-grad)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                            transition={{ duration: 2.5, ease: 'easeInOut' }}
                        />

                        {/* Sub branch lines - Perfectly vertical for symmetry */}
                        {[
                            'M 280 140 L 280 360',
                            'M 660 140 L 660 360',
                            'M 850 250 L 1040 250',
                            'M 850 250 C 945 250 945 360 1040 360',
                        ].map((d, i) => (
                            <motion.path
                                key={i}
                                d={d}
                                stroke="var(--color-primary)"
                                strokeWidth="1.5"
                                strokeDasharray="5 5"
                                strokeLinecap="round"
                                opacity="0.2"
                                initial={{ pathLength: 0 }}
                                animate={inView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1.5, delay: 1 + i * 0.15 }}
                            />
                        ))}

                        {/* Node circles on SVG plane */}
                        {[
                            { cx: 90,   cy: 250, r: 8, primary: true }, // Phase 1
                            { cx: 280,  cy: 140, r: 5, primary: false }, // Phase 2a
                            { cx: 280,  cy: 360, r: 5, primary: false }, // Phase 2b
                            { cx: 470,  cy: 250, r: 8, primary: true }, // Phase 3
                            { cx: 660,  cy: 140, r: 5, primary: false }, // Phase 4a
                            { cx: 660,  cy: 360, r: 5, primary: false }, // Phase 4b
                            { cx: 850,  cy: 250, r: 8, primary: true }, // Phase 5
                            { cx: 1040, cy: 140, r: 5, primary: true }, // Outcome A
                            { cx: 1040, cy: 250, r: 5, primary: true }, // Outcome B
                            { cx: 1040, cy: 360, r: 5, primary: true }, // Outcome C
                        ].map((n, i) => (
                            <motion.circle
                                key={i}
                                cx={n.cx} cy={n.cy} r={n.r}
                                fill={n.primary ? 'var(--color-primary)' : 'none'}
                                stroke="var(--color-primary)"
                                strokeWidth="2"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={inView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.4, type: 'spring' }}
                            />
                        ))}

                        {/* The animated balls - Splitting at Execution */}
                        {inView && (
                            <>
                                {/* Ball 1: Main ball (Always visible, goes up at split) */}
                                <motion.rect width="14" height="14" x="-7" y="-7" rx="100" fill="url(#ball-grad)" filter="url(#ball-glow)">
                                    <animateMotion
                                        dur="6.5s"
                                        repeatCount="indefinite"
                                        path="M 90 250 C 185 250 185 140 280 140 C 375 140 375 250 470 250 C 565 250 565 140 660 140 C 755 140 755 250 850 250 C 945 250 945 140 1040 140"
                                        calcMode="spline"
                                        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                                    />
                                </motion.rect>

                                {/* Ball 2: Split to Development (Straight) */}
                                <motion.rect width="14" height="14" x="-7" y="-7" rx="100" fill="url(#ball-grad)" filter="url(#ball-glow)">
                                    <animateMotion
                                        dur="6.5s"
                                        repeatCount="indefinite"
                                        path="M 90 250 C 185 250 185 140 280 140 C 375 140 375 250 470 250 C 565 250 565 140 660 140 C 755 140 755 250 850 250 L 1040 250"
                                        calcMode="spline"
                                        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;0;1;1"
                                        keyTimes="0;0.77;0.78;1"
                                        dur="6.5s"
                                        repeatCount="indefinite"
                                    />
                                </motion.rect>

                                {/* Ball 3: Split to Graphic Design (Down) */}
                                <motion.rect width="14" height="14" x="-7" y="-7" rx="100" fill="url(#ball-grad)" filter="url(#ball-glow)">
                                    <animateMotion
                                        dur="6.5s"
                                        repeatCount="indefinite"
                                        path="M 90 250 C 185 250 185 140 280 140 C 375 140 375 250 470 250 C 565 250 565 140 660 140 C 755 140 755 250 850 250 C 945 250 945 360 1040 360"
                                        calcMode="spline"
                                        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;0;1;1"
                                        keyTimes="0;0.77;0.78;1"
                                        dur="6.5s"
                                        repeatCount="indefinite"
                                    />
                                </motion.rect>
                            </>
                        )}
                    </svg>

                    {/* Overlay Pill Labels - Absolutely positioned to match SVG coordinates */}
                    <div className="process-pills-overlay">
                        {/* 1: Discovery | cx: 90, cy: 250 */}
                        <PillChip step={steps[0]} inView={inView} delay={0.3} x="8.18%" y="50%" />
                        
                        {/* 2: Audit | cx: 280, cy: 140 */}
                        <PillChip step={steps[1]} inView={inView} delay={0.6} x="25.45%" y="28%" />
                        {/* 3: Research | cx: 280, cy: 360 */}
                        <PillChip step={steps[2]} inView={inView} delay={0.75} x="25.45%" y="72%" />
                        
                        {/* 4: Strategy | cx: 470, cy: 250 */}
                        <PillChip step={steps[3]} inView={inView} delay={0.9} x="42.72%" y="50%" />
                        
                        {/* 5: UX Design | cx: 660, cy: 140 */}
                        <PillChip step={steps[4]} inView={inView} delay={1.2} x="60%" y="28%" />
                        {/* 6: Prototyping | cx: 660, cy: 360 */}
                        <PillChip step={steps[5]} inView={inView} delay={1.35} x="60%" y="72%" />
                        
                        {/* 7: Execution | cx: 850, cy: 250 */}
                        <PillChip step={steps[6]} inView={inView} delay={1.5} x="77.27%" y="50%" />
                        
                        {/* 8: Marketing | cx: 1040, cy: 140 */}
                        <PillChip step={steps[7]} inView={inView} delay={1.8} x="94.54%" y="28%" />
                        {/* 9: Development | cx: 1040, cy: 250 */}
                        <PillChip step={steps[8]} inView={inView} delay={1.95} x="94.54%" y="50%" />
                        {/* 10: Graphic Design | cx: 1040, cy: 360 */}
                        <PillChip step={steps[9]} inView={inView} delay={2.1} x="94.54%" y="72%" />
                    </div>
                </div>

                {/* ─── Mobile Vertical Timeline ─── */}
                <div className="process-mobile">
                    <div className="process-mobile__line" />
                    {steps.map((step, i) => (
                        <ProcessNode key={step.id} step={step} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PillChip = ({ step, inView, delay, x, y }) => {
    const Icon = step.icon;
    return (
        <motion.div
            className={`pill-chip ${step.isSub ? 'pill-chip--sub' : ''} ${step.isEnd ? 'pill-chip--end' : ''}`}
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.8, y: 10, x: '-50%', translateY: '-50%' }}
            animate={inView ? { opacity: 1, scale: 1, y: 0, x: '-50%', translateY: '-50%' } : {}}
            transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.04, y: -4, x: '-50%', translateY: '-50%' }}
        >
            <span className="pill-chip__icon">
                <Icon size={step.isSub ? 13 : 16} />
            </span>
            <span className="pill-chip__label">{step.label}</span>
        </motion.div>
    );
};

export default Process;

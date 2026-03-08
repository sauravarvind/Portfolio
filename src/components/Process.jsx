import { motion } from 'framer-motion';
import { Phone, Search, Lightbulb, Zap, Rocket, Palette, Code, BarChart, Activity, Fingerprint } from 'lucide-react';
import './Process.css';

const Process = () => {
    return (
        <section id="process" className="process section">
            <div className="container">
                <div className="section-title justify-center text-center">
                    <h2>Process</h2>
                    <span>/ Architecture of Growth</span>
                </div>
                <p className="process-subtitle text-center">
                    Continuous iteration ensures every pixel serves a purpose and every interaction feels natural.
                </p>



                <div className="workflow-diagram">
                    <svg className="workflow-svg" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Connection Paths */}
                        <g className="flow-paths">
                            {/* Path 1: Start to Phase 1 */}
                            <Path d="M 20 200 H 180" delay={0.2} />

                            {/* Path 2: Phase 1 to Strategy branches */}
                            <Path d="M 180 200 L 340 130" delay={0.4} />
                            <Path d="M 180 200 L 340 270" delay={0.4} />
                            <Path d="M 340 130 L 500 200" delay={1.0} />
                            <Path d="M 340 270 L 500 200" delay={1.0} />

                            {/* Path 3: Strategy to Build branches */}
                            <Path d="M 500 200 L 660 130" delay={1.4} />
                            <Path d="M 500 200 L 660 270" delay={1.4} />
                            <Path d="M 660 130 L 820 200" delay={2.0} />
                            <Path d="M 660 270 L 820 200" delay={2.0} />

                            {/* Path 4: Build to Diamond */}
                            <Path d="M 820 200 H 900" delay={2.4} />

                            {/* Branching Paths at Diamond */}
                            <Path d="M 900 200 C 930 200, 940 80, 980 80" delay={2.8} />
                            <Path d="M 900 200 H 980" delay={2.8} />
                            <Path d="M 900 200 C 930 200, 940 320, 980 320" delay={2.8} />
                        </g>

                    </svg>

                    <div className="nodes-container">
                        {/* Start Node */}
                        <motion.div
                            className="workflow-node start-node"
                            style={{ left: '2%', top: '50%' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                        >
                            <div className="node-dot"></div>
                        </motion.div>

                        {/* Phase 1: Booking */}
                        <Node icon={<Phone size={14} />} label="Phase 1: Booking" subtext="Discovery Call" x="18%" y="50%" delay={0.4} active />

                        {/* Phase 2: Strategy Sub-pills */}
                        <Node icon={<Activity size={12} />} label="Audit" subtext="Analysis" x="34%" y="32.5%" delay={0.7} isSub />
                        <Node icon={<Search size={12} />} label="Research" subtext="User Study" x="34%" y="67.5%" delay={0.9} isSub />
                        <Node icon={<Lightbulb size={16} />} label="Phase 2: Strategy" subtext="Roadmap" x="50%" y="50%" delay={1.2} />

                        {/* Phase 3: Building Sub-pills */}
                        <Node icon={<Palette size={12} />} label="UX Design" subtext="Wires" x="66%" y="32.5%" delay={1.6} isSub />
                        <Node icon={<Fingerprint size={12} />} label="Prototypes" subtext="Interactive" x="66%" y="67.5%" delay={1.8} isSub />
                        <Node icon={<Zap size={16} />} label="Phase 3: Execution" subtext="Engine" x="82%" y="50%" delay={2.2} />

                        {/* Branch point (Diamond) */}
                        <motion.div
                            className="workflow-diamond"
                            style={{ left: '90%', top: '50%' }}
                            initial={{ scale: 0, rotate: 45 }}
                            whileInView={{ scale: 1, rotate: 45 }}
                            transition={{ delay: 2.6 }}
                        />

                        {/* Endpoints */}
                        <Node icon={<BarChart size={16} />} label="Marketing" subtext="Growth" x="98%" y="20%" delay={3.0} isEnd />
                        <Node icon={<Code size={16} />} label="Development" subtext="Scale" x="98%" y="50%" delay={3.2} isEnd />
                        <Node icon={<Palette size={16} />} label="Graphic Design" subtext="Visuals" x="98%" y="80%" delay={3.4} isEnd />
                    </div>
                </div>


            </div>
        </section>
    );
};

const Path = ({ d, delay }) => (
    <motion.path
        d={d}
        stroke="var(--color-primary)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay }}
    />
);

const Node = ({ icon, label, subtext, x, y, delay, active, isEnd, isSub }) => (
    <motion.div
        className={`workflow-node-wrapper ${active ? 'active' : ''} ${isEnd ? 'end-node' : ''} ${isSub ? 'sub-pill' : ''}`}
        style={{ left: x, top: y, position: 'absolute' }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    >
        <div className="node-content">
            <div className="node-icon">{icon}</div>
            <div className="node-info">
                <span className="node-label">{label}</span>
                {subtext && <span className="node-subtext">{subtext}</span>}
            </div>
        </div>
        {isEnd && <div className="end-marker"></div>}
    </motion.div>
);

export default Process;

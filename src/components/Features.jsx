import { motion } from 'framer-motion';
import { Trophy, Zap, Gauge, Map } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-8 h-8 text-neon-orange" />,
        title: "100% Electric Power",
        description: "Instant torque, zero emissions. Our next-gen fleet outpaces classic gas karts with silent, explosive acceleration."
    },
    {
        icon: <Gauge className="w-8 h-8 text-neon-red" />,
        title: "Pro-Level Telemetry",
        description: "Live lap times, sector splits, and post-race analytics sent straight to your device."
    },
    {
        icon: <Map className="w-8 h-8 text-white" />,
        title: "Multi-Level Circuits",
        description: "Race on dynamic 3-story tracks engineered for high-speed overtakes and technical cornering."
    },
    {
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
        title: "Competitive Leagues",
        description: "Join weekly tournaments or our endurance leagues to prove you're the fastest on the grid."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-dark-surface relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        NOT YOUR AVERAGE <span className="text-gradient">JOINT.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        We've redefined indoor racing. Everything from the karts to the track surface is engineered for maximum performance and adrenaline.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-sans">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

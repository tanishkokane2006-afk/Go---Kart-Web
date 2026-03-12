import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 relative bg-dark-bg text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/10 text-neon-orange font-medium text-sm tracking-widest uppercase mb-4">
                        About Velocity Kart
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        ENGINEERED FOR <span className="text-gradient">PURE SPEED.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Founded by professional racers, Velocity Kart was built with one goal in mind: bringing the authentic, high-g-force experience of competitive motorsport to the public.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our state-of-the-art electric karts deliver instant torque and unparalleled handling across our multi-level architectural circuits. Whether you’re a beginner learning the racing line or a seasoned pro looking to shave milliseconds off your lap time, our facility provides the ultimate proving ground.
                    </p>
                    <div className="pt-6 flex gap-6">
                        <div className="border-l-2 border-neon-red pl-4">
                            <h4 className="text-3xl font-black text-white">100+</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Daily Races</p>
                        </div>
                        <div className="border-l-2 border-neon-orange pl-4">
                            <h4 className="text-3xl font-black text-white">50k</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Square Feet</p>
                        </div>
                        <div className="border-l-2 border-white/30 pl-4">
                            <h4 className="text-3xl font-black text-white">0.0</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Emissions</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop"
                        alt="Karting action"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
}

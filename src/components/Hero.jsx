import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neon-red/30 bg-neon-red/10 text-neon-red font-medium text-sm tracking-widest uppercase"
                >
                    Unleash the Adrenaline
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
                >
                    DOMINATE THE
                    <span className="block text-gradient">TRACK.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light"
                >
                    High-performance electric karts, challenging multi-level circuits, and real-time telemetry. Experience the future of competitive racing today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#register"
                        className="group relative px-8 py-4 bg-neon-red text-white font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,42,42,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,42,42,0.8)] transition-all flex items-center justify-center gap-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-red to-neon-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10">Book Your Race</span>
                        <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#tracks"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-xl backdrop-blur-sm border border-white/10 transition-all flex items-center justify-center"
                    >
                        Explore Tracks
                    </a>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </section>
    );
}

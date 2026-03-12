import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tighter"
                >
                    <span className="text-white">VELOCITY</span>
                    <span className="text-neon-red">KART</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden md:flex gap-8 text-sm font-medium text-gray-400"
                >
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#tracks" className="hover:text-white transition-colors">Tracks</a>
                    <a href="#karts" className="hover:text-white transition-colors">The Fleet</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <a
                        href="#register"
                        className="px-6 py-2.5 bg-gradient-to-r from-neon-red to-neon-orange text-white font-bold rounded-lg shadow-lg hover:shadow-neon-red/20 transition-all hover:scale-105"
                    >
                        Race Now
                    </a>
                </motion.div>
            </div>
        </nav>
    );
}

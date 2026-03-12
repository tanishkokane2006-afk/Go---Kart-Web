import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative bg-dark-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        NEED ASSISTANCE? <span className="text-gradient">CONTACT US.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have questions about group bookings, corporate events, or league requirements? Reach out to our race coordinators.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-neon-red/10 border border-neon-red/30 flex items-center justify-center mb-6 text-neon-red">
                            <Phone className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call the Track</h3>
                        <p className="text-gray-400 mb-4">Available during operational hours for immediate assistance.</p>
                        <a href="tel:+917666008159" className="text-white font-black text-xl hover:text-neon-red transition-colors">+91 7666008159</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-neon-orange/10 border border-neon-orange/30 flex items-center justify-center mb-6 text-neon-orange">
                            <Mail className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-4">For press, partnerships, and general inquiries via email.</p>
                        <a href="mailto:[EMAIL_ADDRESS]" className="text-white font-black text-xl hover:text-neon-orange transition-colors">[EMAIL_ADDRESS]</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-6 text-white">
                            <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Track Hours</h3>
                        <p className="text-gray-400 mb-4">We are open 7 days a week for arrive & drive racing.</p>
                        <p className="text-white font-black text-xl">Mon-Sun: 10AM - 11PM</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

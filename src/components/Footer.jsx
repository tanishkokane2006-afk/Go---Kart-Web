import { ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-bg border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">VELOCITY</span>
                            <span className="text-neon-red">KART</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pr-6">
                            Arrive & Drive racing facility engineered for extreme performance and competitive thrills. Join the leaderboard today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-neon-red transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Home</a></li>
                            <li><a href="#about" className="hover:text-neon-red transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About</a></li>
                            <li><a href="#features" className="hover:text-neon-red transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Services</a></li>
                            <li><a href="#" className="hover:text-neon-red transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> IKC</a></li>
                            <li><a href="#" className="hover:text-neon-red transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Karting Acadmy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Action Items</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#register" className="hover:text-neon-orange transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Register</a></li>
                            <li><a href="#register" className="hover:text-neon-orange transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Book Rides</a></li>
                            <li><a href="#contact" className="hover:text-neon-orange transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Join Our Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Stay updated on tournaments, league signups, and track news.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neon-red text-white"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-2 p-1.5 bg-gradient-to-r from-neon-red to-neon-orange rounded-md hover:scale-105 transition-transform"
                            >
                                <Mail className="w-4 h-4 text-white" />
                            </button>
                        </form>
                        <div className="mt-8 space-y-2 text-sm">
                            <p className="text-gray-400 flex items-center gap-2">
                                <span className="text-white font-bold">Email:</span>
                                <a href="mailto:info@indiankarting.com" className="hover:text-neon-red transition-colors">info@indiankarting.com</a>
                            </p>
                            <p className="text-gray-400 flex items-center gap-2">
                                <span className="text-white font-bold">Phone:</span>
                                <a href="tel:+917249471501" className="hover:text-neon-red transition-colors">+91 7249471501</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Velocity Kart. Contact us for inquiries and feedback.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

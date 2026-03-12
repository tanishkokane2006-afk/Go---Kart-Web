import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { registerUser } from '../firebase';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: 'beginner',
        password: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // 1. Register with Firebase Authentication
            // If API keys aren't set, it will throw an error and we'll show it
            const { user, error } = await registerUser(formData.email, formData.password);

            if (error) {
                throw new Error(error);
            }

            // 2. Send data to Google Sheets Webhook
            const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

            if (webhookUrl && webhookUrl !== 'your_webhook_url_here') {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Because Google Apps Script doesn't always handle CORS well directly here unless preflight is perfect
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        experience: formData.experience
                    })
                });
            } else {
                console.warn('Google Sheets Webhook URL not configured. Skipping sheets logging.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', experience: 'beginner', password: '' });

        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMessage(err.message || 'Failed to register. Please try again.');
        }
    };

    return (
        <section id="register" className="py-32 relative bg-dark-bg text-white overflow-hidden">
            {/* Abstract background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="glass-card p-10 md:p-14 border-t-2 border-t-neon-red/50">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">SECURE YOUR <span className="text-gradient">SEAT.</span></h2>
                        <p className="text-gray-400">Register now to reserve your spot on the grid. Space is limited.</p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                            <h3 className="text-3xl font-bold mb-4">Registration Complete</h3>
                            <p className="text-gray-400 text-lg">You're on the grid! Check your email for race details and waiver forms.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-bold transition-all"
                            >
                                Book Another Race
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-gray-300 uppercase">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                        placeholder="Ayrton Senna"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-gray-300 uppercase">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                        placeholder="racer@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-gray-300 uppercase">Create Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        minLength="6"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-gray-300 uppercase">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold tracking-wide text-gray-300 uppercase">Experience Level</label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all appearance-none text-white"
                                    >
                                        <option value="beginner">Beginner (First Time)</option>
                                        <option value="intermediate">Intermediate (Karting Experience)</option>
                                        <option value="pro">Pro (League Racer)</option>
                                    </select>
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                                    <AlertCircle className="w-5 h-5" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full mt-6 py-4 bg-gradient-to-r from-neon-red to-neon-orange text-white font-black text-xl rounded-xl shadow-lg hover:shadow-neon-red/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {status === 'loading' ? 'PROCESSING...' : 'CONFIRM REGISTRATION'}
                            </button>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    );
}

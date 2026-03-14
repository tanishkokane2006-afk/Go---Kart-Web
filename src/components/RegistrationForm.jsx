import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { registerUser, signInWithGoogle } from '../firebase';

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
            const { error } = await registerUser(formData.email, formData.password);

            if (error) {
                throw new Error(error);
            }

            // 2. Send data to Google Sheets Webhook
            const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

            if (webhookUrl && webhookUrl !== 'your_webhook_url_here') {
                await fetch(webhookUrl, {
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

    const handleGoogleSignIn = async () => {
        setStatus('loading');
        setErrorMessage('');
        
        try {
            const { error, user } = await signInWithGoogle();
            
            if (error) {
                throw new Error(error);
            }
            
            // Optional: Send to Google Sheets if you want to track Google Sign-ins too
            const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
            if (webhookUrl && webhookUrl !== 'your_webhook_url_here') {
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        name: user.displayName || 'Google User',
                        email: user.email,
                        phone: 'N/A via Google',
                        experience: 'unknown'
                    })
                }).catch(e => console.warn('Webhook failed', e));
            }
            
            setStatus('success');
            
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMessage(err.message || 'Failed to sign in with Google. Please try again.');
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
                            
                            <div className="relative flex items-center py-4">
                                <div className="flex-grow border-t border-white/10"></div>
                                <span className="flex-shrink-0 mx-4 text-gray-500 text-sm font-bold uppercase">Or</span>
                                <div className="flex-grow border-t border-white/10"></div>
                            </div>
                            
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={status === 'loading'}
                                className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-xl border border-white/10 transition-all disabled:opacity-70"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Sign in with Google
                            </button>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    );
}

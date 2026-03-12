import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <RegistrationForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

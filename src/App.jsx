import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import CallToAction from './components/CallToAction.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import MobileCTA from './components/MobileCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen font-inter bg-c2c-cream text-foreground">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="pb-24 lg:pb-0" tabIndex={-1}>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

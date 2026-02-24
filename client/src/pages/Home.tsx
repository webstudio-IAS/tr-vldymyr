import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        <section id="why-us" className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6" data-testid="text-cta-title">
              Need a reliable transport partner? Contact us today.
            </h2>
            <a 
              href="#contact" 
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg transition-all"
              data-testid="link-cta-contact"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

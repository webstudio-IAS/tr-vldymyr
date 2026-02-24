import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        <section id="why-us" className="bg-primary py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 sm:mb-6" data-testid="text-cta-title">
              Need a reliable transport partner? Contact us today.
            </h2>
            <a 
              href="#contact" 
              className="inline-block bg-white text-primary font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all text-sm sm:text-base"
              data-testid="link-cta-contact"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        <Fleet />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

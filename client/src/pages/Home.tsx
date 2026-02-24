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
        <Fleet />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

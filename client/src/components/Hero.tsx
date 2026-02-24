import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop"
          alt="WFITS Transport Services"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-8">
              <div className="h-px w-6 bg-primary" />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">WFITS Transport</span>
              <div className="h-px w-6 bg-primary" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.1] mb-6" data-testid="text-hero-title">
              Professional Transport You Can Count On.
            </h1>

            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
              Years of experience in moving and logistics. From local deliveries to long-distance hauls — we get it done right, every time.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-14">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact" data-testid="button-hero-quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white" asChild>
                <a href="#services" data-testid="button-hero-services">
                  Our Services
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <p className="text-white text-sm font-semibold">Licensed & Insured</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <p className="text-white text-sm font-semibold">On-Time Delivery</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <p className="text-white text-sm font-semibold">No Hidden Fees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

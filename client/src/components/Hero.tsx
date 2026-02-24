import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen sm:min-h-[90vh] flex items-center pt-16 sm:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-truck.jpg"
          alt="WFITS Transport Services"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 mr-2 flex-shrink-0" />
              Years of experience in professional transport
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight sm:leading-[1.1] mb-4 sm:mb-6" data-testid="text-hero-title">
              Reliable Transport, <span className="text-primary-foreground/90 underline decoration-primary underline-offset-4 sm:underline-offset-8">Delivered.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
              WFITS provides professional transport and moving services backed by years of hands-on experience. Whether it's a local delivery or a long-distance haul, your goods are in safe hands.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact" data-testid="button-hero-quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/5 border-white/20 text-white backdrop-blur-sm" asChild>
                <a href="#services" data-testid="button-hero-services">
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
              <div className="flex items-center justify-center text-slate-300">
                <ShieldCheck className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center text-slate-300">
                <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">On-Time Guarantee</span>
              </div>
              <div className="flex items-center justify-center text-slate-300">
                <Star className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

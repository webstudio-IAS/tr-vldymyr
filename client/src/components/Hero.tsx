import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="WFITS Transport Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2" />
              Years of experience in professional transport
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 text-balance">
              Reliable Transport, <span className="text-primary-foreground/90 underline decoration-primary underline-offset-8">Delivered.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed" data-testid="text-hero-description">
              WFITS provides professional transport and moving services backed by years of hands-on experience. Whether it's a local delivery or a long-distance haul, your goods are in safe hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full text-base px-8 h-14 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all" asChild>
                <a href="#contact" data-testid="button-hero-quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all" asChild>
                <a href="#services" data-testid="button-hero-services">
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center text-slate-300">
                <ShieldCheck className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">On-Time Guarantee</span>
              </div>
              <div className="flex items-center text-slate-300 hidden md:flex">
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

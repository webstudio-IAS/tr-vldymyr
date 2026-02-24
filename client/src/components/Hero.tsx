import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/image_1771937713604.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium mb-6">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 mr-2 flex-shrink-0" />
              Years of experience in professional transport
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6" data-testid="text-hero-title">
              Your Cargo,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Our Mission.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed" data-testid="text-hero-description">
              WFITS provides professional transport and moving services backed by years of hands-on experience. Whether it's a local delivery or a long-distance haul, your goods are in safe hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact" data-testid="button-hero-quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-slate-300" asChild>
                <a href="#services" data-testid="button-hero-services">
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm">On-Time Guarantee</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
              <img
                src={heroImage}
                alt="WFITS Transport Services"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

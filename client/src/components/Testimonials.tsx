import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Thomas Bergmann",
    role: "Homeowner",
    content: "Outstanding service from start to finish. The WFITS team arrived on time, handled our furniture with great care, and had everything set up in our new home by the afternoon. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Anna Schreiber",
    role: "Business Owner",
    content: "We needed to relocate our office with minimal disruption. WFITS managed the entire process professionally — from packing sensitive equipment to setting everything up at the new location. True experts.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Marcus Weber",
    role: "Long-Distance Move",
    content: "I was worried about shipping my belongings across the country, but WFITS made the whole process smooth and stress-free. Clear communication, fair pricing, and everything arrived in perfect condition.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 hidden sm:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6" data-testid="text-testimonials-title">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none relative pt-8 dark:bg-slate-900" data-testid={`card-testimonial-${index}`}>
                <div className="absolute -top-5 left-6 bg-primary text-white p-3 rounded-full shadow-md">
                  <Quote className="w-5 h-5" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 italic leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

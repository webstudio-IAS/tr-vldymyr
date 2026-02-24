import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Ready to Make Your Move?
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Fill out the form to get a free, no-obligation quote for your upcoming move. Our team aims to respond to all inquiries within 2 hours during business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us 24/7</h4>
                  <p className="text-slate-600">1-800-MOVE-NOW</p>
                  <p className="text-slate-500 text-sm">(1-800-668-3669)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@swiftmoves.com</p>
                  <p className="text-slate-500 text-sm">quotes@swiftmoves.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">123 Logistics Way, Suite 100</p>
                  <p className="text-slate-500 text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative"
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 opacity-10 pointer-events-none">
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="currentColor" cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>
            
            <h4 className="text-2xl font-display font-bold text-slate-900 mb-8">Request a Free Quote</h4>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

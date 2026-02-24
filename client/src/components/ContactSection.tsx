import { motion } from "framer-motion";
import { Mail, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6" data-testid="text-contact-title">
              Ready to Make Your Move?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10">
              Fill out the form to get a free, no-obligation quote for your upcoming transport or move. Our team at WFITS responds to all inquiries promptly.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email Us</h4>
                  <a href="mailto:wf-t@gmx.de" className="text-slate-600 dark:text-slate-400 break-all" data-testid="link-contact-email">wf-t@gmx.de</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Monday - Saturday: 7:00 AM - 7:00 PM</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative"
          >
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 opacity-10 pointer-events-none hidden sm:block">
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="currentColor" cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">Request a Free Quote</h4>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

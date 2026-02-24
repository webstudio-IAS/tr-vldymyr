import { Truck, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center group mb-6" data-testid="link-footer-logo">
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <Truck className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                WF<span className="text-primary">ITS</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional transport services backed by years of experience. WFITS delivers reliability, safety, and efficiency on every job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" data-testid="link-footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" data-testid="link-footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-primary transition-colors">Local Transport</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Long Distance Hauling</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Commercial Moves</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Packing & Loading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:wf-t@gmx.de" className="hover:text-primary transition-colors">wf-t@gmx.de</a>
              </li>
              <li>
                <span>Mon - Sat: 7AM - 7PM</span>
              </li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Request a Quote</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm" data-testid="text-footer-copyright">
          <p>&copy; {new Date().getFullYear()} WFITS Transport Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Truck, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-16">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center mb-6" data-testid="link-footer-logo">
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
                WF<span className="text-primary">ITS</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
              Professional transport services backed by years of experience. WFITS delivers reliability, safety, and efficiency on every job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors" aria-label="Facebook" data-testid="link-footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors" aria-label="Instagram" data-testid="link-footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#services" className="text-sm sm:text-base transition-colors">Local Transport</a></li>
              <li><a href="#services" className="text-sm sm:text-base transition-colors">Long Distance Hauling</a></li>
              <li><a href="#services" className="text-sm sm:text-base transition-colors">Commercial Moves</a></li>
              <li><a href="#services" className="text-sm sm:text-base transition-colors">Packing & Loading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="mailto:wf-t@gmx.de" className="text-sm sm:text-base transition-colors break-all">wf-t@gmx.de</a>
              </li>
              <li>
                <span className="text-sm sm:text-base">Mon - Sat: 7AM - 7PM</span>
              </li>
              <li><a href="#contact" className="text-sm sm:text-base transition-colors">Request a Quote</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-800 text-center text-slate-500 text-xs sm:text-sm" data-testid="text-footer-copyright">
          <p>&copy; {new Date().getFullYear()} WFITS Transport Services. All rights reserved.</p>
          <p className="mt-2 text-slate-500 text-[11px]">Built by webstudio-ias</p>
        </div>
      </div>
    </footer>
  );
}

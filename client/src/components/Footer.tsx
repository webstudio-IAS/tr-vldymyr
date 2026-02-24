import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center group mb-6">
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <Truck className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Swift<span className="text-primary">Moves</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Premium moving services designed to take the stress out of your relocation. Fully licensed, insured, and dedicated to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Local Moving</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Long Distance Moving</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Relocation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Packing & Unpacking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Secure Storage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to get moving tips and exclusive offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-primary w-full"
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SwiftMoves Logistics LLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Licensed: USDOT 1234567 | MC 890123</p>
        </div>
      </div>
    </footer>
  );
}

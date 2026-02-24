import { Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 text-xs font-medium hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="mailto:wf-t@gmx.de" className="flex items-center hover:text-white transition-colors" data-testid="link-email">
            <Mail className="w-3.5 h-3.5 mr-2 text-primary" />
            <span>wf-t@gmx.de</span>
          </a>
          <div className="flex items-center hover:text-white transition-colors cursor-default hidden lg:flex">
            <Clock className="w-3.5 h-3.5 mr-2 text-primary" />
            <span>Mon - Sat: 7AM - 7PM</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors" data-testid="link-facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition-colors" data-testid="link-instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

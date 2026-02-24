import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 text-xs font-medium hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center hover:text-white transition-colors cursor-default">
            <Phone className="w-3.5 h-3.5 mr-2 text-primary" />
            <span>1-800-MOVE-NOW</span>
          </div>
          <div className="flex items-center hover:text-white transition-colors cursor-default">
            <Mail className="w-3.5 h-3.5 mr-2 text-primary" />
            <span>hello@swiftmoves.com</span>
          </div>
          <div className="flex items-center hover:text-white transition-colors cursor-default hidden lg:flex">
            <Clock className="w-3.5 h-3.5 mr-2 text-primary" />
            <span>Mon - Sat: 8AM - 8PM</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

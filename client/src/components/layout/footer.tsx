import { LogIn } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-royal-navy text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-egyptian-pattern"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-pharaoh-gold mb-4 flex items-center">
              <LogIn className="mr-2" size={24} />
              INZOPAY
            </div>
            <p className="text-gray-300 mb-4">
              Electronic payment services with ancient Egyptian heritage and modern technology.
            </p>
            <div className="flex space-x-4">
              <SiFacebook className="text-pharaoh-gold hover:text-white cursor-pointer transition-colors" size={20} />
              <SiX className="text-pharaoh-gold hover:text-white cursor-pointer transition-colors" size={20} />
              <SiLinkedin className="text-pharaoh-gold hover:text-white cursor-pointer transition-colors" size={20} />
              <SiInstagram className="text-pharaoh-gold hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pharaoh-gold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Payment Processing</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Digital Products</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pharaoh-gold">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pharaoh-gold">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-pharaoh-gold transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-pharaoh-gold mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Inzopay. All rights reserved. Built with ancient wisdom and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
}

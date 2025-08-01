import { Button } from "@/components/ui/button";
import { Rocket, Eye, LogIn } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-white py-20 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, hsl(213, 53%, 23%), hsl(214, 50%, 35%), hsl(215, 28%, 17%))'}}>
      {/* Ancient Egyptian decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Eye className="text-6xl text-pharaoh-gold transform rotate-12" size={64} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <LogIn className="text-8xl text-pharaoh-gold transform -rotate-12" size={80} />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-10">
        <div className="w-16 h-16 pyramid-shape bg-pharaoh-gold"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn your digital ideas into{" "}
            <span className="text-pharaoh-gold">inspiration</span>{" "}
            on our platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get ready to transform your ideas into digital reality and embody your aspirations in our advanced digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="bg-pharaoh-gradient text-royal-navy px-8 py-4 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 pharaoh-shadow"
            >
              <a href="https://inzopay.com/auth/sginup" target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2" size={20} />
                Try FREE for 14 days
              </a>
            </Button>
            <p className="text-sm opacity-75">No credit card required</p>
          </div>
        </div>
      </div>
      
      {/* Geometric divider */}
      <div className="absolute bottom-0 left-0 right-0 hieroglyph-divider h-1"></div>
    </section>
  );
}

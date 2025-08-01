import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-royal-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-egyptian-pattern" style={{backgroundSize: '60px 60px'}}></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your 14 Day Free Trial
          </h2>
          <p className="text-xl mb-8 opacity-90">
            All the benefits you need to grow your revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="bg-pharaoh-gradient text-royal-navy px-8 py-4 text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 pharaoh-shadow"
            >
              <a href="https://inzopay.com/auth/sginup" target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2" size={20} />
                Start Free Trial
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">No credit card required – Complete Registration in under 2 minutes.</p>
        </div>
      </div>
    </section>
  );
}

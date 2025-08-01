import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Plug, Shield, Check, Scroll } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Create conversion-optimized checkout",
    description: "You can choose the optimal design for your payment page, whether simple or fully detailed"
  },
  {
    icon: Plug,
    title: "Payment gateway integration", 
    description: "Our website integrates with many payment gateways to facilitate your payment process with ease"
  },
  {
    icon: Shield,
    title: "Ensure secure automated delivery",
    description: "Protect products processed by automated delivery systems with encrypted tracking and authentication."
  }
];

const benefits = [
  "Secure payment platform",
  "Digital subscriptions management", 
  "Analysis tools",
  "Product sales reports",
  "Product performance analysis",
  "Strategic decisions"
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-sand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy mb-4 flex items-center justify-center">
            <Scroll className="mr-3 text-pharaoh-gold" size={32} />
            How Inzopay Works
          </h2>
          <p className="text-lg text-gray-600">Concentrate on what you do best. We'll do the rest</p>
          <div className="w-24 h-1 bg-pharaoh-gradient mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Hand-drawn style icons with instructions */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pharaoh-gradient rounded-full flex items-center justify-center">
                  <step.icon className="text-royal-navy" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-royal-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Benefits */}
          <Card className="p-8 pharaoh-shadow egyptian-border">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-royal-navy mb-6">We are working on providing:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="text-pharaoh-gold" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

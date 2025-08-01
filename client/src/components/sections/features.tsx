import { Card, CardContent } from "@/components/ui/card";
import { Globe, Coins, RotateCcw, TrendingUp, Rocket, Smile, Gem } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global reach",
    description: "Sell worldwide without inventory or shipping constraints."
  },
  {
    icon: Coins,
    title: "Low setup costs", 
    description: "No physical inventory means lower startup and ongoing costs."
  },
  {
    icon: RotateCcw,
    title: "Recurring revenue",
    description: "Sell memberships, subscriptions and access to generate continuous income."
  },
  {
    icon: TrendingUp,
    title: "Scalable sales",
    description: "High margins and ability to sell unlimited quantities without incremental costs."
  },
  {
    icon: Rocket,
    title: "Instant delivery",
    description: "Customers receive products digitally right away with no waiting."
  },
  {
    icon: Smile,
    title: "Customer satisfaction",
    description: "Convenient access anywhere meets customer demand for instant gratification."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy mb-4 flex items-center justify-center">
            <Gem className="mr-3 text-pharaoh-gold" size={32} />
            Core Benefits & Features
          </h2>
          <div className="w-24 h-1 bg-pharaoh-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 pharaoh-shadow egyptian-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-pharaoh-gold mb-4">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-royal-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

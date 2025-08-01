import { Button } from "@/components/ui/button";
import { Store, Truck, BarChart3, PieChart } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Anything you sell",
    description: "Effortlessly expand your sales reach across platforms, amplify your online presence through your website, blog, or social media.",
    details: "Effortlessly expand your sales reach across platforms, amplify your online presence through your website, blog, or social media, and seamlessly integrate with your store or existing Stripe or PayPal setup."
  },
  {
    icon: Truck,
    title: "Fast & secure delivery",
    description: "Enjoy peace of mind with our commitment to fast and secure delivery of your digital goods, regardless of order size or format.",
    details: "Swift & Secure Delivery of Your Digital Goods! Enjoy peace of mind with our commitment to fast and secure delivery of your digital goods, regardless of order size or format."
  },
  {
    icon: BarChart3,
    title: "Scale your marketing",
    description: "Unlock your business's growth potential with robust capabilities, effortless upsells, and automated cart recovery emails.",
    details: "Maximize sales potential: special sales and emails. Unlock your business's growth potential with a robust range of capabilities, such as effortless upsells, automated cart recovery emails, and comprehensive affiliate support, to accelerate your sales."
  },
  {
    icon: PieChart,
    title: "Manage and analytics",
    description: "Drive revenue growth through comprehensive analytics and data-driven decision-making to optimize your sales process.",
    details: "Optimize Sales with Analytics! Drive revenue growth and enhance operational efficiency by harnessing the power of valuable data and gaining actionable insights through comprehensive analytics."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy mb-4">
            One service to meet all needs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy a unique experience on the Inzopay platform, which supports creative people and businesses of all sizes. 
            Customize your experience with individual features or powerful packages available.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-pharaoh-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-royal-navy" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-royal-navy mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="w-16 h-16 bg-pharaoh-gradient rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-royal-navy" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-royal-navy mb-4">{service.title}</h3>
                <h4 className="text-xl font-semibold text-royal-navy mb-4">
                  {service.title === "Anything you sell" && "Expand Sales Effortlessly Integrate Seamlessly!"}
                  {service.title === "Fast & secure delivery" && "Swift & Secure Delivery of Your Digital Goods!"}
                  {service.title === "Scale your marketing" && "Maximize sales potential: special sales and emails"}
                  {service.title === "Manage and analytics" && "Optimize Sales with Analytics!"}
                </h4>
                <p className="text-gray-600 mb-6">{service.details}</p>
                <Button 
                  asChild
                  className="bg-pharaoh-gradient text-royal-navy hover:bg-pharaoh-gold-dark"
                >
                  <a href="https://inzopay.com/auth/sginup" target="_blank" rel="noopener noreferrer">
                    Start FREE Trial
                  </a>
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="w-20 h-20 bg-pharaoh-gradient rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="text-royal-navy" size={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

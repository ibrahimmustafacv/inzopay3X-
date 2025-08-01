import { Mail, Phone, MessageCircle, Stamp } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    info: "ibrahimmustafacv@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone Support", 
    info: "+201027714970"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    info: "24/7 Available"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-sand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy mb-4 flex items-center justify-center">
            <Stamp className="mr-3 text-pharaoh-gold" size={32} />
            Royal Contact Seal
          </h2>
          <div className="w-24 h-1 bg-pharaoh-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-pharaoh-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 pharaoh-shadow relative">
                  <method.icon className="text-royal-navy" size={32} />
                  <div className="absolute inset-0 rounded-full border-4 border-pharaoh-gold animate-pulse"></div>
                </div>
                <h3 className="text-xl font-semibold text-royal-navy mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

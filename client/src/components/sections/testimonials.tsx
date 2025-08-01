import { Card, CardContent } from "@/components/ui/card";
import { Star, User, Scroll } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Inzopay has transformed our business operations. The Egyptian-inspired design makes it memorable while the functionality is top-notch.",
    author: "Amal Wael",
    role: "E-commerce Owner"
  },
  {
    rating: 5,
    text: "The integration was seamless and the support team is incredibly responsive. The unique design sets us apart from competitors.",
    author: "Ahmed Hassan", 
    role: "Digital Entrepreneur"
  },
  {
    rating: 5,
    text: "Outstanding platform with excellent analytics. The ancient Egyptian theme gives our brand a distinctive identity that customers love.",
    author: "Maria Rodriguez",
    role: "Small Business Owner"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 papyrus-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy mb-4 flex items-center justify-center">
            <Scroll className="mr-3 text-pharaoh-gold" size={32} />
            What Our Users Say
          </h2>
          <div className="w-24 h-1 bg-pharaoh-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="papyrus-texture p-6 egyptian-border pharaoh-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-pharaoh-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pharaoh-gradient rounded-full flex items-center justify-center mr-3">
                    <User className="text-royal-navy" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-royal-navy">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

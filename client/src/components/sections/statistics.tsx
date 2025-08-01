import { Card, CardContent } from "@/components/ui/card";

export default function Statistics() {
  return (
    <section className="py-16 bg-sand-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-navy mb-6">
              Expand Your Reach and Profits{" "}
              <span className="text-pharaoh-gold">Globally</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Advantages of Offering Digital Products for Sale Online
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-4 pharaoh-shadow egyptian-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-pharaoh-gold mb-2">40,000+</div>
                  <div className="text-sm text-gray-600">Users happy with our service</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 pharaoh-shadow egyptian-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-pharaoh-gold mb-2">160,000+</div>
                  <div className="text-sm text-gray-600">Products created by users</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Global network connectivity" 
              className="rounded-xl pharaoh-shadow w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

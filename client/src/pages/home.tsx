import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Statistics from "@/components/sections/statistics";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Features />
        <HowItWorks />
        <Services />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

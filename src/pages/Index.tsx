
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Countries } from "../components/sections/Countries";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Countries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

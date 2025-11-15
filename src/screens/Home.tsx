import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

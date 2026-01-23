import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Benefits from "@/components/benefits";
import Footer from "@/components/Footer";
import StaticChatbot from "@/components/StaticChatbot";
import Demos from "@/components/Demos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Benefits />
        <Demos />
        <CTA />
        <Footer />
      </main>
      <StaticChatbot/>
    </>
  );
}

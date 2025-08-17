import Header from "@/components/Header";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero"
import Integrations from "@/sections/Integrations";
import Introducing from "@/sections/Introducing";
import Fq from "@/sections/Fq"
import TryFree from "@/components/TryFree";
import Footer from "@/components/Footer"
export default function Home() {
  return (
   <div>
    <Header /> 
    <Hero />
    <Introducing />
    <Features />
    <Integrations />
    <Fq />
    <TryFree />
    <Footer />
   </div>
  );
}

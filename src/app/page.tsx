import BrandStrip from "./components/landing/BrandStrip";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import HowItWorks from "./components/landing/HowItWorks";
import StatsBanner from "./components/landing/Stat";
import Nav from "./components/Nav";
import PublicHome from "./components/landing/PublicHome";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Nav />
      <PublicHome />
      <BrandStrip />
      <StatsBanner />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

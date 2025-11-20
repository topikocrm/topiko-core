import Header from "../components/header";
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <HeroSection />
    </div>
  );
}
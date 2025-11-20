import NexusHeader from "../components/NexusHeader";
import NexusHero from "../components/NexusHero";
import NexusFeatures from "../components/NexusFeatures";
import NexusTestimonials from "../components/NexusTestimonials";
import NexusPricing from "../components/NexusPricing";
import NexusStats from "../components/NexusStats";
import NexusContact from "../components/NexusContact";
import NexusFooter from "../components/NexusFooter";

export default function NexusFlowHome() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <NexusHeader />
      <NexusHero />
      <NexusFeatures />
      <NexusTestimonials />
      <NexusStats />
      <NexusPricing />
      <NexusContact />
      <NexusFooter />
    </div>
  );
}
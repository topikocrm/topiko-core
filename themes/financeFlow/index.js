import FinanceHeader from './components/FinanceHeader';
import FinanceHero from './components/FinanceHero';
import FinanceLogos from './components/FinanceLogos';
import FinanceFeatures from './components/FinanceFeatures';
import FinanceTestimonials from './components/FinanceTestimonials';
import FinancePricing from './components/FinancePricing';
import FinanceCTA from './components/FinanceCTA';

export default function FinanceFlowTheme() {
  return (
    <>
      <FinanceHeader />
      <main>
        <FinanceHero />
        <FinanceLogos />
        <FinanceFeatures />
        <FinanceTestimonials />
        <FinancePricing />
        <FinanceCTA />
      </main>
    </>
  );
}
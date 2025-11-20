import FinanceHeader from './components/FinanceHeader';
import FinanceHero from './components/FinanceHero';
import FinanceLogos from './components/FinanceLogos';
import FinanceFeatures from './components/FinanceFeatures';
import FinanceTestimonials from './components/FinanceTestimonials';
import FinancePricing from './components/FinancePricing';
import FinanceCTA from './components/FinanceCTA';

export default function FinanceFlowTheme({ content }) {
  return (
    <>
      <FinanceHeader navigation={content?.navigation} theme={content?.theme} />
      <main>
        <FinanceHero hero={content?.hero} theme={content?.theme} />
        <FinanceLogos companyLogos={content?.companyLogos} theme={content?.theme} />
        <FinanceFeatures features={content?.features} theme={content?.theme} />
        <FinanceTestimonials testimonials={content?.testimonials} theme={content?.theme} />
        <FinancePricing pricing={content?.pricing} theme={content?.theme} />
        <FinanceCTA hero={content?.hero} theme={content?.theme} />
      </main>
    </>
  );
}
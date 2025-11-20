import FinanceFlowTheme from "@/themes/financeFlow";
import { 
  getHeroContent, 
  getFeaturesContent, 
  getTestimonialsContent, 
  getPricingContent, 
  getCompanyLogosContent, 
  getNavigationContent, 
  getThemeSettings 
} from "@/lib/payload";

export default async function Home() {
  // Fetch all content from PayloadCMS
  const [
    heroContent,
    featuresContent,
    testimonialsContent,
    pricingContent,
    companyLogosContent,
    navigationContent,
    themeSettings
  ] = await Promise.all([
    getHeroContent(),
    getFeaturesContent(),
    getTestimonialsContent(),
    getPricingContent(),
    getCompanyLogosContent(),
    getNavigationContent(),
    getThemeSettings()
  ]);

  const dynamicContent = {
    hero: heroContent,
    features: featuresContent,
    testimonials: testimonialsContent,
    pricing: pricingContent,
    companyLogos: companyLogosContent,
    navigation: navigationContent,
    theme: themeSettings
  };

  return <FinanceFlowTheme content={dynamicContent} />;
}

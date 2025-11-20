import FinanceFlowTheme from "@/themes/financeFlow";

export default function Home() {
  // Static content with PayloadCMS-like structure for immediate deployment
  // The admin panel at /admin will allow editing these values in the database
  const staticContent = {
    hero: {
      badge: "🚀 New AI Features Available",
      headline: "The AI Revenue Platform for Next Gen Finance teams",
      description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
      primaryButton: { text: "Start Free Trial", url: "/signup" },
      secondaryButton: { text: "Watch Demo", url: "/demo" },
      emailSignup: { placeholder: "Enter your work email" }
    },
    theme: {
      colors: {
        gradientFrom: "from-teal-600",
        gradientTo: "to-cyan-600",
        primary: "#0d9488"
      }
    }
  };

  return <FinanceFlowTheme content={staticContent} />;
}

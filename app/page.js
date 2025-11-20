import FinanceFlowTheme from "@/themes/financeFlow";

async function getContentFromAPI() {
  try {
    // Fetch content from our admin API
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
    
    const heroRes = await fetch(`${baseUrl}/api/admin/hero`, { cache: 'no-store' })
    const heroData = await heroRes.json()

    return {
      hero: heroData.success ? heroData.data : null,
      theme: {
        colors: {
          gradientFrom: "from-teal-600",
          gradientTo: "to-cyan-600",
          primary: "#0d9488"
        }
      }
    }
  } catch (error) {
    console.log('Using fallback content:', error.message)
    return null
  }
}

export default async function Home() {
  // Try to get dynamic content, fall back to static if needed
  const dynamicContent = await getContentFromAPI()
  
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

  // Use dynamic content if available, otherwise use static
  const content = dynamicContent || staticContent;

  return <FinanceFlowTheme content={content} />;
}

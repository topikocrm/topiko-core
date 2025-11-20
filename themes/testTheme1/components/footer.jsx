import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Text from "@/components/ui/text";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: ["Document Management", "Client Portal", "Time Tracking", "Billing", "Analytics", "Integrations"]
    },
    {
      title: "Practice Areas", 
      links: ["Corporate Law", "Litigation", "Real Estate", "Family Law", "Criminal Defense", "Immigration"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Webinars", "Documentation", "Support Center", "Community"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners", "Contact", "Privacy Policy"]
    }
  ];

  return (
    <>
      {/* CTA Section */}
      <SectionContainer className="py-20 bg-gray-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <Text as="h2" className="text-4xl font-serif mb-6">
            Ready to transform your legal practice?
          </Text>
          <Text className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of legal professionals who trust Legora to streamline their workflows and deliver better client outcomes.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input 
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8">
              Get Started
            </Button>
          </div>
          
          <Text className="text-gray-400 text-sm">
            Start your free trial today. No credit card required.
          </Text>
        </div>
      </SectionContainer>

      {/* Main Footer */}
      <SectionContainer className="py-16 bg-black text-white">
        <Grid lg="5" md="3" sm="2" className="gap-8 mb-12">
          <Grid.Col className="lg:col-span-1">
            <Text as="h3" className="text-2xl font-bold mb-6">LEGORA</Text>
            <Text className="text-gray-400 mb-6 leading-relaxed">
              Empowering legal professionals with innovative technology solutions for the modern practice of law.
            </Text>
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <Box key={social} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </Box>
              ))}
            </div>
          </Grid.Col>
          
          {footerSections.map((section, index) => (
            <Grid.Col key={index}>
              <Text as="h4" className="font-semibold mb-6 text-white">
                {section.title}
              </Text>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Text className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                      {link}
                    </Text>
                  </li>
                ))}
              </ul>
            </Grid.Col>
          ))}
        </Grid>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text className="text-gray-400 text-sm">
              © 2024 Legora. All rights reserved.
            </Text>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Text className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">
                Terms of Service
              </Text>
              <Text className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">
                Privacy Policy
              </Text>
              <Text className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">
                Cookie Policy
              </Text>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
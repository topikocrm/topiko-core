import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Flex from "@/components/ui/flex";

export default function LegalHeader() {
  return (
    <SectionContainer 
      sectionClassName="bg-stone-50 py-6 border-b border-stone-200"
      className="py-0"
    >
      <Flex justify="between" align="center">
        {/* Logo */}
        <Text as="h1" className="text-lg font-semibold text-stone-900 tracking-tight">
          LEGORA
        </Text>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Text className="text-sm text-stone-600 hover:text-stone-900 cursor-pointer transition-colors duration-200">
            About
          </Text>
          <Text className="text-sm text-stone-600 hover:text-stone-900 cursor-pointer transition-colors duration-200">
            Lawyers
          </Text>
          <Text className="text-sm text-stone-600 hover:text-stone-900 cursor-pointer transition-colors duration-200">
            Contact
          </Text>
        </nav>

        {/* Right Section */}
        <Flex align="center" className="space-x-6">
          <Text className="text-sm text-stone-600 hover:text-stone-900 cursor-pointer transition-colors duration-200">
            Login
          </Text>
          <Flex align="center" className="space-x-3">
            <div className="w-5 h-5 bg-stone-300 rounded-sm"></div>
            <div className="w-5 h-5 bg-stone-300 rounded-sm"></div>
          </Flex>
        </Flex>
      </Flex>
    </SectionContainer>
  );
}
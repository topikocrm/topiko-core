import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Text from "@/components/ui/text";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";

export default function VisionSection() {
  return (
    <SectionContainer className="py-20 bg-green-50">
      <Grid lg="2" md="1" className="items-center gap-16">
        <Grid.Col>
          <div className="space-y-8">
            <Text as="h2" className="text-2xl font-semibold text-green-900 mb-2">
              Our Vision
            </Text>
            
            <Text as="h3" className="text-4xl font-serif text-gray-900 leading-tight">
              Transforming the legal profession through innovation and accessibility
            </Text>
            
            <div className="space-y-6">
              <Text className="text-lg text-gray-700 leading-relaxed">
                At Legora, we believe that technology should empower lawyers to focus on what they do best—serving their clients and advocating for justice. Our platform removes the administrative burden that often weighs down legal professionals.
              </Text>
              
              <Text className="text-lg text-gray-700 leading-relaxed">
                We're building tools that adapt to how lawyers actually work, not forcing them to adapt to rigid systems. Every feature is designed with real legal professionals who understand the unique challenges of the profession.
              </Text>
              
              <Text className="text-lg text-gray-700 leading-relaxed">
                Our commitment extends beyond software—we're partnering with law firms to create a more efficient, accessible, and sustainable legal ecosystem for everyone.
              </Text>
            </div>
            
            <Button className="bg-green-700 text-white hover:bg-green-800 px-8 py-3">
              Learn About Our Mission
            </Button>
          </div>
        </Grid.Col>
        
        <Grid.Col>
          <div className="space-y-8">
            <Box className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <div>
                  <Text className="font-semibold text-gray-900">Sarah Mitchell</Text>
                  <Text className="text-gray-600">Founder & CEO</Text>
                </div>
              </div>
              <Text className="text-gray-700 italic leading-relaxed">
                "After 15 years practicing law, I knew there had to be a better way. Legora represents everything I wished I had access to during my time in practice."
              </Text>
            </Box>
            
            <Box className="bg-amber-50 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-amber-200/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Text className="text-amber-700/60">Office Interior</Text>
                </div>
                <Text className="text-amber-700/60">Modern Conference Room</Text>
              </div>
            </Box>
          </div>
        </Grid.Col>
      </Grid>
    </SectionContainer>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Box from "@/components/ui/box";
import Image from "next/image";

export default function LegalHero() {
  return (
    <SectionContainer 
      sectionClassName="bg-stone-50 min-h-screen py-16 lg:py-24"
    >
      <Grid lg="2" className="min-h-[80vh] items-center gap-16">
        {/* Left Column - Content */}
        <Grid.Col>
          <Box className="space-y-12">
            {/* Main Heading */}
            <Text as="h1" className="text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] text-stone-900 tracking-tight">
              Legal work,<br />
              without limits.
            </Text>
            
            {/* Contact Form */}
            <Box className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 max-w-sm">
              <Text className="text-base text-stone-600 mb-8 font-medium">
                Make this an enquiry
              </Text>
              
              <Box className="space-y-6">
                <Input 
                  type="email"
                  placeholder="Email address"
                  className="h-12 text-base border-stone-300 focus:border-stone-900 focus:ring-stone-900/20 rounded-lg"
                />
                
                <Box className="flex items-center justify-between">
                  <Text className="text-base text-stone-500">
                    All fields
                  </Text>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 bg-stone-900 hover:bg-stone-800 rounded-full transition-all duration-200"
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid.Col>
        
        {/* Right Column - Image */}
        <Grid.Col className="flex justify-center lg:justify-end">
          <Box className="relative w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[26rem] xl:h-[32rem]">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent rounded-2xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
              alt="Professional legal consultant"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1200px) 384px, 416px"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </SectionContainer>
  );
}
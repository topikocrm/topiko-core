import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Text from "@/components/ui/text";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";

export default function ContentSection() {
  const officeImages = [
    {
      title: "Conference Room",
      description: "Modern meeting spaces designed for client consultations",
      bgColor: "bg-amber-100"
    },
    {
      title: "Private Office",
      description: "Quiet, professional environment for focused work",
      bgColor: "bg-gray-100"
    },
    {
      title: "Reception Area", 
      description: "Welcoming space that reflects our professional standards",
      bgColor: "bg-blue-50"
    },
    {
      title: "Library",
      description: "Extensive legal resources and research facilities",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <SectionContainer className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <Text as="h2" className="text-5xl font-serif text-gray-900 mb-8 leading-tight">
          Legora meets lawyers
          <br />
          where they are.
        </Text>
        <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Whether you're in the courtroom, meeting with clients, or working from home, 
          our platform adapts to your workflow and keeps you connected to what matters most.
        </Text>
      </div>

      <Grid lg="2" md="2" sm="1" className="gap-6 mb-12">
        {officeImages.map((image, index) => (
          <Grid.Col key={index}>
            <Box className={`${image.bgColor} rounded-2xl p-8 h-80 relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02]`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="relative h-full flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Text as="h3" className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {image.description}
                  </Text>
                </div>
              </div>
            </Box>
          </Grid.Col>
        ))}
      </Grid>

      <div className="text-center">
        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
          Schedule a Tour
        </Button>
        <Text className="text-gray-600 mt-4">
          Visit our offices and see how we can support your practice
        </Text>
      </div>
    </SectionContainer>
  );
}
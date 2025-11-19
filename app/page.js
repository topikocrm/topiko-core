import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <SectionContainer className="bg-gray-500 rounded-2xl">
        <Grid lg="4" md="2" sm="1">
          <Grid.Col className="p-4">
            <Text as="h1" className="mb-20">Topiko</Text>
            <Text>Looking for a starting point or more instructions? Head over to Templates or the Learning center.</Text>
            <Button>Get Started</Button>
          </Grid.Col>
          <Grid.Col>
            <Image 
              src="https://disblay.com/static/media/disblayhome.06469ef4fc0dc0d295cb.png" 
              width={700}
              height={700}  
              alt="disblay"
            />
          </Grid.Col>
        </Grid>
      </SectionContainer>
    </>
  );
}

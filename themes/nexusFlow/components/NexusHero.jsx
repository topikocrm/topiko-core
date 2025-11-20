"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayIcon, ArrowRightIcon, CheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const heroSlides = [
  {
    title: "Automate Your Workflow",
    subtitle: "Seamlessly",
    description: "Connect your favorite tools and create powerful automations that save hours of manual work every day.",
    cta: "Start Automating",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    stats: { users: "50K+", automations: "1M+", time_saved: "2.5M hrs" }
  },
  {
    title: "Collaborate Better",
    subtitle: "Together",
    description: "Real-time collaboration features that keep your team aligned and productive across all time zones.",
    cta: "Try Collaboration",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    stats: { teams: "5K+", messages: "10M+", projects: "25K+" }
  },
  {
    title: "Scale Your Business",
    subtitle: "Effortlessly",
    description: "Enterprise-grade infrastructure that grows with your business. From startup to enterprise.",
    cta: "Scale Now",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    stats: { companies: "1K+", revenue: "$50M+", growth: "300%" }
  }
];

export default function NexusHero() {
  return (
    <SectionContainer 
      sectionClassName="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 min-h-screen relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      
      <Carousel className="relative z-10">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="min-h-[90vh] flex items-center">
                <Grid lg="2" className="items-center gap-16">
                  {/* Left Column - Content */}
                  <Grid.Col className="space-y-8">
                    <div className="space-y-6">
                      <Badge variant="secondary" className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                        🚀 New Feature Available
                      </Badge>
                      
                      <div>
                        <Text as="h1" className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {slide.title}
                          </span>
                          <br />
                          <span className="text-gray-900">{slide.subtitle}</span>
                        </Text>
                      </div>
                      
                      <Text className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        {slide.description}
                      </Text>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-6">
                      <Flex align="center" className="space-x-4">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                        >
                          {slide.cta}
                          <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Button>
                        
                        <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900">
                          <PlayIcon className="mr-2 w-5 h-5" />
                          Watch Demo
                        </Button>
                      </Flex>

                      {/* Email signup */}
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-white/40 shadow-lg">
                        <Text className="text-sm text-gray-600 mb-4 font-medium">
                          Start your free 14-day trial
                        </Text>
                        <Flex className="space-x-3">
                          <Input 
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Get Started
                          </Button>
                        </Flex>
                        <Text className="text-xs text-gray-500 mt-2">
                          No credit card required • Cancel anytime
                        </Text>
                      </div>
                    </div>

                    {/* Social Proof */}
                    <div className="space-y-4">
                      <Flex align="center" className="space-x-6">
                        <Flex align="center" className="space-x-2">
                          <div className="flex -space-x-2">
                            {[1,2,3,4,5].map((i) => (
                              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white"></div>
                            ))}
                          </div>
                          <Text className="text-sm text-gray-600">
                            Join {slide.stats.users || "50K+"} happy users
                          </Text>
                        </Flex>
                        
                        <Flex align="center" className="space-x-1">
                          {[1,2,3,4,5].map((i) => (
                            <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                          <Text className="text-sm text-gray-600 ml-2">4.9/5 rating</Text>
                        </Flex>
                      </Flex>

                      {/* Stats */}
                      <Grid lg="3" className="gap-6 max-w-lg">
                        {Object.entries(slide.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <Text className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {value}
                            </Text>
                            <Text className="text-sm text-gray-600 capitalize">
                              {key.replace('_', ' ')}
                            </Text>
                          </div>
                        ))}
                      </Grid>
                    </div>
                  </Grid.Col>
                  
                  {/* Right Column - Visual */}
                  <Grid.Col className="relative">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl transform rotate-3 scale-105"></div>
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={600}
                          height={400}
                          className="rounded-2xl shadow-lg"
                          priority={index === 0}
                        />
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                        
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                          <Text className="text-sm font-medium text-gray-900">
                            ✨ Automation Active
                          </Text>
                          <Text className="text-xs text-gray-600">
                            Saving 2.5 hrs/day
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-8 bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white/90" />
        <CarouselNext className="right-8 bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white/90" />
      </Carousel>
    </SectionContainer>
  );
}
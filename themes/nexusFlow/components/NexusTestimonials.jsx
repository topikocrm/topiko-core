"use client";

import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Box from "@/components/ui/box";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon, QuoteIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "NexusFlow transformed our entire workflow. We've reduced manual tasks by 80% and our team productivity has skyrocketed. The automation builder is incredibly intuitive.",
    metrics: {
      timeSaved: "15 hrs/week",
      efficiency: "+80%",
      satisfaction: "5/5"
    },
    featured: true
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "As a startup, we needed something that could scale with us. NexusFlow has been perfect - from 5 to 50 employees, it just works. The collaboration features are game-changing.",
    metrics: {
      growth: "+300%",
      team: "50 users",
      costs: "-40%"
    }
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    company: "Global Solutions",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The analytics dashboard gives us insights we never had before. We can now predict bottlenecks and optimize our processes in real-time. Absolutely essential for any modern business.",
    metrics: {
      insights: "Real-time",
      accuracy: "99.9%",
      decisions: "+250%"
    }
  },
  {
    name: "David Park",
    role: "CTO",
    company: "DataDrive Corp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "Security was our main concern when choosing a workflow platform. NexusFlow exceeded our expectations with enterprise-grade security and compliance. We sleep better at night.",
    metrics: {
      security: "A+ Grade",
      uptime: "99.99%",
      compliance: "SOC 2"
    }
  },
  {
    name: "Lisa Wang",
    role: "Marketing Director",
    company: "BrandBoost",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "Our marketing campaigns are now fully automated and optimized. NexusFlow's integrations with our tools saved us months of development time. ROI is incredible.",
    metrics: {
      campaigns: "100% auto",
      roi: "+400%",
      time: "-60%"
    }
  },
  {
    name: "James Thompson",
    role: "Operations Manager",
    company: "RetailFlow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "Managing inventory across 50 locations was a nightmare. NexusFlow automated our entire supply chain and we haven't had a stockout in 6 months. Pure magic.",
    metrics: {
      locations: "50 stores",
      stockouts: "0 in 6mo",
      efficiency: "+90%"
    }
  }
];

export default function NexusTestimonials() {
  return (
    <SectionContainer sectionClassName="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            ❤️ Loved by Teams
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What our customers
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}say about us
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of teams who have transformed their workflows with NexusFlow. 
              Here's what they have to say about their experience.
            </Text>
          </div>

          {/* Overall Stats */}
          <Grid lg="4" className="gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Text className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4.9/5
              </Text>
              <Text className="text-gray-600">Average Rating</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                50K+
              </Text>
              <Text className="text-gray-600">Happy Users</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                99.9%
              </Text>
              <Text className="text-gray-600">Uptime</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                1M+
              </Text>
              <Text className="text-gray-600">Automations</Text>
            </div>
          </Grid>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className={`pl-4 ${testimonial.featured ? 'md:basis-2/3 lg:basis-1/2' : 'md:basis-1/2 lg:basis-1/3'}`}>
                <div className={`h-full ${testimonial.featured ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' : 'bg-white border border-gray-200'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {testimonial.featured && (
                    <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      ⭐ Featured Review
                    </Badge>
                  )}
                  
                  {/* Quote */}
                  <div className="space-y-6">
                    <QuoteIcon className="w-8 h-8 text-blue-600" />
                    
                    <Text className={`${testimonial.featured ? 'text-lg' : 'text-base'} text-gray-700 leading-relaxed`}>
                      "{testimonial.quote}"
                    </Text>

                    {/* Rating */}
                    <Flex align="center" className="space-x-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </Flex>

                    {/* Metrics */}
                    <div className="bg-white/70 rounded-xl p-4 border border-gray-200/50">
                      <Text className="text-sm font-medium text-gray-900 mb-3">Key Results:</Text>
                      <Grid lg="3" className="gap-3">
                        {Object.entries(testimonial.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <Text className="text-sm font-bold text-blue-600">{value}</Text>
                            <Text className="text-xs text-gray-600 capitalize">{key}</Text>
                          </div>
                        ))}
                      </Grid>
                    </div>

                    {/* Author */}
                    <Flex align="center" className="space-x-4 pt-4 border-t border-gray-200">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      
                      <div>
                        <Text className="font-semibold text-gray-900">
                          {testimonial.name}
                        </Text>
                        <Text className="text-sm text-gray-600">
                          {testimonial.role}
                        </Text>
                        <Text className="text-sm text-blue-600 font-medium">
                          {testimonial.company}
                        </Text>
                      </div>
                    </Flex>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-8 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90" />
          <CarouselNext className="right-8 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90" />
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <Text className="text-2xl font-bold text-gray-900 mb-4">
            Ready to join thousands of satisfied customers?
          </Text>
          <Text className="text-gray-600 mb-6">
            Start your free trial today and see why teams love NexusFlow.
          </Text>
          <Flex justify="center" align="center" className="space-x-4">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 5).map((testimonial, index) => (
                <Image
                  key={index}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <Text className="text-sm text-gray-600">
              Join 50,000+ happy users
            </Text>
          </Flex>
        </div>
      </div>
    </SectionContainer>
  );
}
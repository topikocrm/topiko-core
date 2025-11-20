"use client";

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
import { StarIcon, QuoteIcon, TrendingUpIcon, DollarSignIcon, ClockIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Finance",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "FinanceFlow transformed our revenue operations completely. We now have real-time insights that help us make informed decisions 3x faster than before.",
    metrics: {
      efficiency: "+300%",
      accuracy: "99.2%",
      timeSaved: "20 hrs/week"
    },
    featured: true
  },
  {
    name: "Michael Chen",
    role: "CFO",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The AI-powered forecasting has been a game-changer for our business planning. We've improved our forecast accuracy from 78% to 94% in just 3 months.",
    metrics: {
      forecast: "94% accuracy",
      growth: "+45%",
      insights: "Real-time"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Revenue Operations",
    company: "ScaleUp Inc",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The platform's integration capabilities are outstanding. We connected all our revenue tools in under 2 hours and immediately saw the value of unified reporting.",
    metrics: {
      integration: "< 2 hrs",
      visibility: "+250%",
      reporting: "Automated"
    }
  },
  {
    name: "David Park",
    role: "Finance Director",
    company: "InnovateNow",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "Security was our top concern, but FinanceFlow exceeded expectations. SOC 2 compliance and enterprise-grade security give us complete peace of mind.",
    metrics: {
      security: "SOC 2",
      uptime: "99.9%",
      compliance: "100%"
    }
  },
  {
    name: "Jennifer Kim",
    role: "Senior Financial Analyst",
    company: "DataDriven Co",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    quote: "The AI insights help us identify revenue opportunities we would have missed. We've discovered $2.3M in additional revenue potential this quarter alone.",
    metrics: {
      revenue: "+$2.3M",
      opportunities: "15 new",
      roi: "420%"
    }
  }
];

export default function FinanceTestimonials() {
  return (
    <SectionContainer sectionClassName="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 px-4 py-2">
            💬 Customer Success
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                finance leaders
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how leading finance teams are transforming their revenue operations 
              with our AI-powered platform.
            </Text>
          </div>

          {/* Overall Stats */}
          <Grid lg="4" className="gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Text className="text-3xl font-bold text-teal-600">4.9/5</Text>
              <Text className="text-gray-600">Customer Rating</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold text-teal-600">10K+</Text>
              <Text className="text-gray-600">Active Users</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold text-teal-600">94%</Text>
              <Text className="text-gray-600">Forecast Accuracy</Text>
            </div>
            <div className="text-center">
              <Text className="text-3xl font-bold text-teal-600">$2.5B+</Text>
              <Text className="text-gray-600">Revenue Tracked</Text>
            </div>
          </Grid>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className={`pl-4 ${testimonial.featured ? 'md:basis-2/3 lg:basis-1/2' : 'md:basis-1/2 lg:basis-1/3'}`}>
                <div className={`h-full rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  testimonial.featured 
                    ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200' 
                    : 'bg-white border border-gray-200'
                }`}>
                  {testimonial.featured && (
                    <Badge className="mb-6 bg-teal-600 text-white">
                      ⭐ Featured Review
                    </Badge>
                  )}
                  
                  {/* Quote */}
                  <div className="space-y-6">
                    <QuoteIcon className="w-8 h-8 text-teal-600" />
                    
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
                      <Text className="text-sm font-medium text-gray-900 mb-3">Impact Results:</Text>
                      <Grid lg="3" className="gap-3">
                        {Object.entries(testimonial.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <Text className="text-sm font-bold text-teal-600">{value}</Text>
                            <Text className="text-xs text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </Text>
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
                        <Text className="text-sm text-teal-600 font-medium">
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

        {/* Success Metrics Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <Text as="h3" className="text-2xl font-bold text-gray-900 mb-4">
              Platform Performance Metrics
            </Text>
            <Text className="text-gray-600">
              Real performance data from our customers across all industries
            </Text>
          </div>

          <Grid lg="3" className="gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUpIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <Text className="text-3xl font-bold text-gray-900 mb-1">3x</Text>
                <Text className="text-lg font-medium text-gray-900 mb-2">Faster Decision Making</Text>
                <Text className="text-sm text-gray-600">Average improvement in financial decision speed</Text>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                <DollarSignIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <Text className="text-3xl font-bold text-gray-900 mb-1">$2.3M</Text>
                <Text className="text-lg font-medium text-gray-900 mb-2">Additional Revenue</Text>
                <Text className="text-sm text-gray-600">Average revenue increase per customer annually</Text>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <Text className="text-3xl font-bold text-gray-900 mb-1">20+</Text>
                <Text className="text-lg font-medium text-gray-900 mb-2">Hours Saved Weekly</Text>
                <Text className="text-sm text-gray-600">Time saved on manual reporting and analysis</Text>
              </div>
            </div>
          </Grid>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
          <Text as="h3" className="text-2xl font-bold mb-4">
            Join 10,000+ finance professionals
          </Text>
          <Text className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Start your journey to better revenue operations today. 
            Join the finance teams already transforming their businesses.
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
            <Text className="text-sm text-teal-100">
              "Best finance platform we've ever used"
            </Text>
          </Flex>
        </div>
      </div>
    </SectionContainer>
  );
}
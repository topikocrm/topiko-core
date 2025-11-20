"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, PlayIcon, TrendingUpIcon, BarChart3Icon } from "lucide-react";
import Image from "next/image";

export default function FinanceHero({ hero, theme }) {
  // Use content from CMS or fallback to defaults
  const badge = hero?.badge || "🚀 New AI Features Available";
  const headline = hero?.headline || "The AI Revenue Platform for Next Gen Finance teams";
  const description = hero?.description || "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.";
  const primaryButton = hero?.primaryButton || { text: "Start Free Trial", url: "/signup" };
  const secondaryButton = hero?.secondaryButton || { text: "Watch Demo", url: "/demo" };
  const emailPlaceholder = hero?.emailSignup?.placeholder || "Enter your work email";
  
  // Theme colors with fallbacks
  const gradientFrom = theme?.colors?.gradientFrom || "from-teal-600";
  const gradientTo = theme?.colors?.gradientTo || "to-cyan-600";
  const primaryColor = theme?.colors?.primary || "#0d9488";
  return (
    <SectionContainer 
      sectionClassName="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 min-h-[90vh] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 py-20">
        <Grid lg="2" className="items-center gap-16 min-h-[70vh]">
          {/* Left Column - Content */}
          <Grid.Col className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-teal-100 text-teal-700 border-teal-200 px-4 py-2">
                {badge}
              </Badge>
              
              <div>
                <Text as="h1" className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-6">
                  {headline.split(' ').map((word, index) => {
                    if (word.includes('Finance') || word.includes('AI') || word.includes('Revenue')) {
                      return (
                        <span key={index} className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                          {word}{' '}
                        </span>
                      );
                    }
                    return word + ' ';
                  })}
                </Text>
                
                <Text className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {description}
                </Text>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Flex align="center" className="space-x-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-medium"
                >
                  {primaryButton.text}
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
                
                <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900 font-medium">
                  <PlayIcon className="mr-2 w-5 h-5" />
                  {secondaryButton.text}
                </Button>
              </Flex>

              {/* Email signup */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-gray-200/50 shadow-lg">
                <Text className="text-sm text-gray-600 mb-4 font-medium">
                  Join 10,000+ finance professionals
                </Text>
                <Flex className="space-x-3">
                  <Input 
                    type="email"
                    placeholder={emailPlaceholder}
                    className="flex-1 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                  />
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    Get Started
                  </Button>
                </Flex>
                <Text className="text-xs text-gray-500 mt-3">
                  No credit card required • 14-day free trial
                </Text>
              </div>
            </div>

            {/* Key Stats */}
            <div className="space-y-4">
              <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Trusted by finance teams at
              </Text>
              
              <Grid lg="3" className="gap-6 max-w-lg">
                <div className="text-center">
                  <Text className="text-2xl font-bold text-teal-600">$2.5B+</Text>
                  <Text className="text-sm text-gray-600">Revenue Tracked</Text>
                </div>
                <div className="text-center">
                  <Text className="text-2xl font-bold text-teal-600">10K+</Text>
                  <Text className="text-sm text-gray-600">Finance Teams</Text>
                </div>
                <div className="text-center">
                  <Text className="text-2xl font-bold text-teal-600">94%</Text>
                  <Text className="text-sm text-gray-600">Accuracy Rate</Text>
                </div>
              </Grid>
            </div>
          </Grid.Col>
          
          {/* Right Column - Dashboard Preview */}
          <Grid.Col className="relative">
            <div className="relative">
              {/* Main dashboard mockup container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-200/50 backdrop-blur-sm">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Text className="text-lg font-semibold text-gray-900">Revenue Dashboard</Text>
                    <Text className="text-sm text-gray-500">Real-time analytics</Text>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Live</Badge>
                </div>
                
                {/* Mock Chart Area */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Text className="font-medium text-gray-900">Monthly Revenue</Text>
                    <Text className="text-2xl font-bold text-teal-600">$847K</Text>
                  </div>
                  
                  {/* Mock line chart */}
                  <div className="h-32 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 rounded-lg flex items-end justify-between p-2">
                    {[40, 60, 45, 80, 65, 90, 75, 95].map((height, index) => (
                      <div 
                        key={index}
                        className="bg-teal-500 rounded-t-sm w-6"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Mock metrics grid */}
                <Grid lg="2" className="gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Flex align="center" className="space-x-3">
                      <TrendingUpIcon className="w-8 h-8 text-green-500" />
                      <div>
                        <Text className="text-lg font-bold text-gray-900">+24%</Text>
                        <Text className="text-sm text-gray-600">Growth Rate</Text>
                      </div>
                    </Flex>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Flex align="center" className="space-x-3">
                      <BarChart3Icon className="w-8 h-8 text-blue-500" />
                      <div>
                        <Text className="text-lg font-bold text-gray-900">98.2%</Text>
                        <Text className="text-sm text-gray-600">Forecast Accuracy</Text>
                      </div>
                    </Flex>
                  </div>
                </Grid>
              </div>
              
              {/* Floating notification card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs">
                <Flex align="center" className="space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <Text className="text-sm font-semibold text-gray-900">
                      AI Alert
                    </Text>
                    <Text className="text-xs text-gray-600">
                      Revenue spike detected +12%
                    </Text>
                  </div>
                </Flex>
              </div>
              
              {/* Floating metric card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
                <Text className="text-sm font-medium text-gray-900 mb-1">
                  💡 AI Recommendation
                </Text>
                <Text className="text-xs text-gray-600">
                  Optimize Q4 pipeline for 15% growth
                </Text>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </SectionContainer>
  );
}
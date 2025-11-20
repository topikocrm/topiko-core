"use client";

import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ZapIcon, 
  BarChart3Icon, 
  UsersIcon, 
  ShieldIcon,
  ArrowRightIcon,
  CheckIcon,
  TimerIcon,
  TrendingUpIcon,
  LockIcon
} from "lucide-react";
import Image from "next/image";

const features = {
  automation: {
    icon: ZapIcon,
    title: "Smart Automation",
    description: "Build powerful workflows without code",
    benefits: [
      "Drag & Drop Builder",
      "500+ Integrations",
      "Smart Triggers",
      "Conditional Logic",
      "Real-time Execution",
      "Error Handling"
    ],
    image: "https://images.unsplash.com/photo-1558655146-364adec68dee?w=800&h=500&fit=crop",
    stats: [
      { label: "Time Saved", value: "85%", icon: TimerIcon },
      { label: "Accuracy", value: "99.9%", icon: CheckIcon },
      { label: "Workflows", value: "1M+", icon: TrendingUpIcon }
    ]
  },
  analytics: {
    icon: BarChart3Icon,
    title: "Advanced Analytics",
    description: "Get insights that drive decisions",
    benefits: [
      "Real-time Dashboards",
      "Custom Reports",
      "Performance Metrics",
      "Trend Analysis",
      "Export Options",
      "AI Insights"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    stats: [
      { label: "Data Points", value: "10B+", icon: BarChart3Icon },
      { label: "Reports", value: "50K+", icon: TrendingUpIcon },
      { label: "Accuracy", value: "99.8%", icon: CheckIcon }
    ]
  },
  collaboration: {
    icon: UsersIcon,
    title: "Team Collaboration",
    description: "Work together seamlessly",
    benefits: [
      "Real-time Chat",
      "File Sharing",
      "Task Management",
      "Video Calls",
      "Screen Sharing",
      "Team Spaces"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    stats: [
      { label: "Active Teams", value: "5K+", icon: UsersIcon },
      { label: "Messages", value: "10M+", icon: TrendingUpIcon },
      { label: "Uptime", value: "99.9%", icon: CheckIcon }
    ]
  },
  security: {
    icon: ShieldIcon,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance",
    benefits: [
      "End-to-end Encryption",
      "SOC 2 Compliance",
      "GDPR Ready",
      "Multi-factor Auth",
      "Audit Logs",
      "Access Controls"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    stats: [
      { label: "Security Score", value: "A+", icon: ShieldIcon },
      { label: "Compliance", value: "100%", icon: CheckIcon },
      { label: "Uptime", value: "99.99%", icon: LockIcon }
    ]
  }
};

export default function NexusFeatures() {
  return (
    <SectionContainer sectionClassName="bg-white py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            🚀 Powerful Features
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}succeed
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From workflow automation to advanced analytics, NexusFlow provides all the tools 
              your team needs to work smarter and achieve more.
            </Text>
          </div>
        </div>

        {/* Features Tabs */}
        <Tabs defaultValue="automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-100">
            {Object.entries(features).map(([key, feature]) => {
              const IconComponent = feature.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{feature.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Grid lg="2" className="items-center gap-16">
                {/* Content */}
                <Grid.Col className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Text as="h3" className="text-3xl font-bold text-gray-900">
                          {feature.title}
                        </Text>
                        <Text className="text-gray-600">{feature.description}</Text>
                      </div>
                    </div>

                    <Text className="text-lg text-gray-600 leading-relaxed">
                      Transform your workflow with our cutting-edge {feature.title.toLowerCase()} 
                      capabilities that scale with your business needs.
                    </Text>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    <Text className="text-lg font-semibold text-gray-900">
                      Key Benefits:
                    </Text>
                    <Grid lg="2" className="gap-3">
                      {feature.benefits.map((benefit, index) => (
                        <Flex key={index} align="center" className="space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                          <Text className="text-gray-700">{benefit}</Text>
                        </Flex>
                      ))}
                    </Grid>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    <Text className="text-lg font-semibold text-gray-900">
                      Performance Metrics:
                    </Text>
                    <Grid lg="3" className="gap-6">
                      {feature.stats.map((stat, index) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border border-gray-200">
                            <StatIcon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                            <Text className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {stat.value}
                            </Text>
                            <Text className="text-sm text-gray-600 mt-1">
                              {stat.label}
                            </Text>
                          </div>
                        );
                      })}
                    </Grid>
                  </div>

                  {/* CTA */}
                  <Flex className="space-x-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Try {feature.title}
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </Flex>
                </Grid.Col>

                {/* Image */}
                <Grid.Col>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl transform -rotate-2 scale-105"></div>
                    <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-200">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={500}
                        className="rounded-2xl"
                      />
                      
                      {/* Floating notification */}
                      <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 max-w-xs">
                        <Flex align="center" className="space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <Text className="text-sm font-semibold text-gray-900">
                              {feature.title} Active
                            </Text>
                            <Text className="text-xs text-gray-600">
                              Running smoothly
                            </Text>
                          </div>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </Grid.Col>
              </Grid>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SectionContainer>
  );
}
"use client";

import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BrainIcon, 
  TrendingUpIcon, 
  Shield,
  Zap,
  BarChart3Icon,
  Users,
  Clock,
  CheckCircle,
  ArrowRightIcon,
  PieChartIcon,
  LineChartIcon,
  DollarSignIcon
} from "lucide-react";

const features = [
  {
    icon: BrainIcon,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze your revenue data to provide actionable insights and predictions.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: TrendingUpIcon,
    title: "Revenue Forecasting",
    description: "Accurate revenue predictions with 94% accuracy rate using advanced statistical models.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: BarChart3Icon,
    title: "Real-time Analytics",
    description: "Live dashboards and real-time reporting to track revenue performance as it happens.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools for finance teams with role-based access and permissions.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 certified platform with bank-grade security and compliance standards.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Connect with 100+ tools including Salesforce, HubSpot, QuickBooks, and more in minutes.",
    color: "from-yellow-500 to-yellow-600"
  }
];

const detailedFeatures = [
  {
    icon: PieChartIcon,
    title: "Advanced Revenue Analytics",
    description: "Get deep insights into your revenue streams with comprehensive analytics and reporting.",
    benefits: [
      "Multi-dimensional revenue analysis",
      "Custom dashboard creation", 
      "Automated report generation",
      "Revenue attribution modeling"
    ],
    color: "from-teal-500 to-cyan-600"
  },
  {
    icon: LineChartIcon,
    title: "Predictive Forecasting",
    description: "Leverage AI to predict future revenue trends and identify growth opportunities.",
    benefits: [
      "Machine learning forecasts",
      "Scenario planning tools",
      "Risk assessment modeling",
      "Growth opportunity identification"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: DollarSignIcon,
    title: "Revenue Operations",
    description: "Streamline your revenue operations with automated workflows and processes.",
    benefits: [
      "Automated data collection",
      "Workflow optimization",
      "Process standardization", 
      "Performance tracking"
    ],
    color: "from-emerald-500 to-teal-600"
  }
];

export default function FinanceFeatures() {
  return (
    <div className="space-y-24">
      {/* Main Features Grid */}
      <SectionContainer sectionClassName="bg-white py-24">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 px-4 py-2">
              🚀 Platform Features
            </Badge>
            
            <div>
              <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Everything you need for{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  revenue success
                </span>
              </Text>
              <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Powerful features designed specifically for modern finance teams to drive 
                revenue growth and operational efficiency.
              </Text>
            </div>
          </div>

          {/* Features Grid */}
          <Grid lg="3" className="gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <Text className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </Text>
                      <Text className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </Text>
                    </div>

                    {/* Learn More */}
                    <Button variant="ghost" className="group/btn text-teal-600 hover:text-teal-700 p-0 h-auto font-medium">
                      Learn more
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </Grid>
        </div>
      </SectionContainer>

      {/* Detailed Features Section */}
      <SectionContainer sectionClassName="bg-gradient-to-br from-gray-50 to-teal-50/30 py-24">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <Text as="h2" className="text-3xl lg:text-4xl font-bold text-gray-900">
              Dive deeper into our platform
            </Text>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our advanced features can transform your revenue operations
            </Text>
          </div>

          <div className="space-y-16">
            {detailedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Grid key={index} lg="2" className={`items-center gap-16 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <Grid.Col className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
                            {feature.title}
                          </Text>
                          <Text className="text-lg text-gray-600 leading-relaxed">
                            {feature.description}
                          </Text>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-4">
                        <Text className="text-lg font-semibold text-gray-900">
                          Key capabilities:
                        </Text>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <Flex key={benefitIndex} align="center" className="space-x-3">
                              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                              <Text className="text-gray-700">{benefit}</Text>
                            </Flex>
                          ))}
                        </div>
                      </div>

                      <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                        Explore Feature
                        <ArrowRightIcon className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </Grid.Col>

                  {/* Visual */}
                  <Grid.Col className={!isEven ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                        {/* Mock feature visualization */}
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <Text className="font-semibold text-gray-900">{feature.title}</Text>
                            <Badge className={`bg-gradient-to-r ${feature.color} text-white`}>
                              Live
                            </Badge>
                          </div>
                          
                          <div className={`bg-gradient-to-br ${feature.color.replace('500', '50').replace('600', '100')} rounded-xl p-6`}>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white rounded-lg p-4 text-center">
                                <Text className="text-2xl font-bold text-gray-900">94%</Text>
                                <Text className="text-sm text-gray-600">Accuracy</Text>
                              </div>
                              <div className="bg-white rounded-lg p-4 text-center">
                                <Text className="text-2xl font-bold text-gray-900">2.5x</Text>
                                <Text className="text-sm text-gray-600">Faster</Text>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {[85, 92, 78, 96].map((value, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <Text className="text-sm text-gray-600">Metric {i + 1}</Text>
                                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full bg-gradient-to-r ${feature.color}`}
                                    style={{ width: `${value}%` }}
                                  ></div>
                                </div>
                                <Text className="text-sm font-medium text-gray-900">{value}%</Text>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating element */}
                      <div className={`absolute ${isEven ? '-top-4 -right-4' : '-top-4 -left-4'} bg-white rounded-xl p-4 shadow-lg border border-gray-200`}>
                        <Flex align="center" className="space-x-2">
                          <Clock className="w-4 h-4 text-teal-600" />
                          <Text className="text-sm font-medium text-gray-900">
                            Real-time
                          </Text>
                        </Flex>
                      </div>
                    </div>
                  </Grid.Col>
                </Grid>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
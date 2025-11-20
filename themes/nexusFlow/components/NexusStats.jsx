"use client";

import { useState, useEffect } from "react";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUpIcon, 
  UsersIcon, 
  ZapIcon, 
  ClockIcon,
  BarChart3Icon,
  CheckCircleIcon,
  ArrowUpIcon,
  DollarSignIcon,
  GlobeIcon,
  AwardIcon
} from "lucide-react";

const stats = [
  {
    title: "Active Users",
    value: 50247,
    growth: 23.5,
    icon: UsersIcon,
    color: "from-blue-500 to-blue-600",
    description: "Monthly active users",
    target: 60000,
    unit: ""
  },
  {
    title: "Automations Created",
    value: 1247382,
    growth: 45.2,
    icon: ZapIcon,
    color: "from-purple-500 to-purple-600",
    description: "Total automations built",
    target: 1500000,
    unit: ""
  },
  {
    title: "Time Saved",
    value: 2547,
    growth: 67.8,
    icon: ClockIcon,
    color: "from-green-500 to-green-600",
    description: "Hours saved this month",
    target: 3000,
    unit: "hrs"
  },
  {
    title: "Revenue Impact",
    value: 12500000,
    growth: 89.3,
    icon: DollarSignIcon,
    color: "from-emerald-500 to-emerald-600",
    description: "Customer revenue generated",
    target: 15000000,
    unit: "$"
  },
  {
    title: "Success Rate",
    value: 99.7,
    growth: 2.1,
    icon: CheckCircleIcon,
    color: "from-teal-500 to-teal-600",
    description: "Workflow success rate",
    target: 100,
    unit: "%"
  },
  {
    title: "Global Reach",
    value: 127,
    growth: 15.4,
    icon: GlobeIcon,
    color: "from-indigo-500 to-indigo-600",
    description: "Countries using NexusFlow",
    target: 150,
    unit: " countries"
  }
];

const achievements = [
  {
    title: "Industry Leader",
    description: "Ranked #1 workflow automation platform by G2",
    icon: AwardIcon,
    metric: "4.9/5 rating"
  },
  {
    title: "Fastest Growing",
    description: "300% year-over-year growth in enterprise customers",
    icon: TrendingUpIcon,
    metric: "+300% growth"
  },
  {
    title: "Customer Success",
    description: "99.2% customer satisfaction score",
    icon: CheckCircleIcon,
    metric: "99.2% CSAT"
  },
  {
    title: "Global Scale",
    description: "Processing 50M+ workflows monthly worldwide",
    icon: BarChart3Icon,
    metric: "50M+ workflows"
  }
];

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toLocaleString();
}

function AnimatedCounter({ value, unit = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const timer = setInterval(() => {
      start += end / (duration / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {unit === "$" && unit}
      {unit === "%" ? count.toFixed(1) : formatNumber(count)}
      {unit !== "$" && unit !== "%" && unit}
    </span>
  );
}

export default function NexusStats() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  return (
    <SectionContainer sectionClassName="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            📊 Real-time Analytics
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Track your team's
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}success metrics
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get real-time insights into your workflow performance, team productivity, 
              and business impact with our comprehensive analytics dashboard.
            </Text>
          </div>

          {/* Period Selector */}
          <Flex justify="center" className="space-x-2">
            {["week", "month", "quarter", "year"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className={selectedPeriod === period ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Button>
            ))}
          </Flex>
        </div>

        {/* Main Stats Grid */}
        <Grid lg="3" className="gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const progressPercentage = (stat.value / stat.target) * 100;
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  {/* Header */}
                  <Flex align="center" justify="between">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <ArrowUpIcon className="w-4 h-4" />
                      <Text className="text-sm font-medium">+{stat.growth}%</Text>
                    </div>
                  </Flex>

                  {/* Main Metric */}
                  <div>
                    <Text className="text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={stat.value} unit={stat.unit} />
                    </Text>
                    <Text className="text-lg font-semibold text-gray-900 mt-1">
                      {stat.title}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {stat.description}
                    </Text>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Flex justify="between" align="center">
                      <Text className="text-xs text-gray-600">Progress to target</Text>
                      <Text className="text-xs font-medium text-gray-900">
                        {Math.round(progressPercentage)}%
                      </Text>
                    </Flex>
                    <Progress 
                      value={progressPercentage} 
                      className="h-2"
                    />
                    <Text className="text-xs text-gray-500">
                      Target: {stat.unit === "$" ? "$" : ""}{formatNumber(stat.target)}{stat.unit !== "$" && stat.unit !== "%" ? stat.unit : ""}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </Grid>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <div className="text-center mb-12">
            <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
              Platform achievements
            </Text>
            <Text className="text-gray-600">
              Milestones we've reached together with our amazing community
            </Text>
          </div>
          
          <Grid lg="2" className="gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                  <Flex align="center" className="space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <Text className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </Text>
                      <Text className="text-gray-600 mb-3">
                        {achievement.description}
                      </Text>
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {achievement.metric}
                      </Badge>
                    </div>
                  </Flex>
                </div>
              );
            })}
          </Grid>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Text as="h3" className="text-2xl font-bold text-gray-900 mb-2">
                Live Activity Feed
              </Text>
              <Text className="text-gray-600">
                Real-time updates from the NexusFlow platform
              </Text>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Text className="text-sm text-gray-600">Live</Text>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { action: "New automation created", user: "TechFlow Inc.", time: "2 seconds ago", type: "creation" },
              { action: "Workflow completed successfully", user: "DataDrive Corp", time: "8 seconds ago", type: "success" },
              { action: "Team member added", user: "InnovateLab", time: "23 seconds ago", type: "team" },
              { action: "Integration connected", user: "BrandBoost", time: "45 seconds ago", type: "integration" },
              { action: "Report generated", user: "RetailFlow", time: "1 minute ago", type: "report" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'creation' ? 'bg-blue-500' :
                  activity.type === 'team' ? 'bg-purple-500' :
                  activity.type === 'integration' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}></div>
                
                <div className="flex-1">
                  <Text className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </Text>
                  <Text className="text-xs text-gray-600">
                    by {activity.user}
                  </Text>
                </div>
                
                <Text className="text-xs text-gray-500">
                  {activity.time}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <Text as="h3" className="text-3xl font-bold mb-4">
            Ready to track your success?
          </Text>
          <Text className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using NexusFlow to automate workflows 
            and track their performance metrics in real-time.
          </Text>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
          >
            Start Your Free Trial
          </Button>
          <Text className="text-sm text-blue-100 mt-4">
            14-day free trial • No credit card required
          </Text>
        </div>
      </div>
    </SectionContainer>
  );
}
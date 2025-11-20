"use client";

import { useState } from "react";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  CheckIcon, 
  XIcon, 
  StarIcon,
  ZapIcon,
  TrendingUpIcon,
  BarChart3Icon,
  CrownIcon
} from "lucide-react";

const plans = {
  monthly: {
    starter: {
      name: "Starter",
      description: "Perfect for small finance teams getting started",
      price: 49,
      icon: ZapIcon,
      color: "from-teal-500 to-teal-600",
      features: [
        { name: "Up to 3 team members", included: true },
        { name: "Basic revenue analytics", included: true },
        { name: "Monthly reporting", included: true },
        { name: "Email support", included: true },
        { name: "5 integrations", included: true },
        { name: "AI forecasting", included: false },
        { name: "Real-time alerts", included: false },
        { name: "Custom dashboards", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false }
      ],
      cta: "Start Free Trial",
      popular: false
    },
    professional: {
      name: "Professional",
      description: "Advanced features for growing finance teams",
      price: 149,
      icon: TrendingUpIcon,
      color: "from-blue-500 to-blue-600",
      features: [
        { name: "Up to 10 team members", included: true },
        { name: "Advanced revenue analytics", included: true },
        { name: "Real-time reporting", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Unlimited integrations", included: true },
        { name: "AI forecasting", included: true },
        { name: "Real-time alerts", included: true },
        { name: "Custom dashboards", included: true },
        { name: "API access", included: true },
        { name: "Priority support", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: 449,
      icon: CrownIcon,
      color: "from-purple-500 to-purple-600",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Enterprise analytics suite", included: true },
        { name: "White-label reporting", included: true },
        { name: "24/7 phone & priority support", included: true },
        { name: "All integrations", included: true },
        { name: "Advanced AI forecasting", included: true },
        { name: "Custom alerts & workflows", included: true },
        { name: "Unlimited custom dashboards", included: true },
        { name: "Full API access", included: true },
        { name: "Dedicated success manager", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  },
  yearly: {
    starter: { price: 39 },    // 20% off
    professional: { price: 119 }, // 20% off  
    enterprise: { price: 359 }    // 20% off
  }
};

// Merge yearly pricing with monthly features
Object.keys(plans.yearly).forEach(key => {
  plans.yearly[key] = { ...plans.monthly[key], ...plans.yearly[key] };
});

export default function FinancePricing() {
  const [isYearly, setIsYearly] = useState(false);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;
  const savings = isYearly ? 20 : 0;

  return (
    <SectionContainer sectionClassName="bg-white py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 px-4 py-2">
            💰 Transparent Pricing
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the right plan for{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                your team
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start with a 14-day free trial. All plans include our core revenue analytics. 
              No hidden fees, cancel anytime.
            </Text>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <Text className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </Text>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-teal-600"
            />
            <Text className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </Text>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Save {savings}%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Plans */}
        <Grid lg="3" className="gap-8">
          {Object.entries(currentPlans).map(([key, plan]) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div key={key} className={`relative ${isPopular ? 'transform scale-105 z-10' : ''}`}>
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-teal-600 text-white px-4 py-1">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`h-full rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  isPopular 
                    ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}>
                  <div className="space-y-8">
                    {/* Plan Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <Text as="h3" className="text-2xl font-bold text-gray-900">
                            {plan.name}
                          </Text>
                        </div>
                      </div>
                      
                      <Text className="text-gray-600">
                        {plan.description}
                      </Text>
                      
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                          <Text className="text-4xl font-bold text-gray-900">
                            ${plan.price}
                          </Text>
                          <Text className="text-gray-600">
                            /month
                          </Text>
                          {isYearly && (
                            <Text className="text-sm text-gray-500 line-through">
                              ${plans.monthly[key].price}
                            </Text>
                          )}
                        </div>
                        
                        {isYearly && (
                          <Text className="text-sm text-green-600 font-medium">
                            Save ${(plans.monthly[key].price - plan.price) * 12}/year
                          </Text>
                        )}
                        
                        <Text className="text-sm text-gray-500">
                          Billed {isYearly ? 'annually' : 'monthly'}
                        </Text>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <Text className="font-semibold text-gray-900">
                        What's included:
                      </Text>
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <Flex key={index} align="center" className="space-x-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              feature.included 
                                ? 'bg-teal-100 text-teal-600' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {feature.included ? (
                                <CheckIcon className="w-3 h-3" />
                              ) : (
                                <XIcon className="w-3 h-3" />
                              )}
                            </div>
                            <Text className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.name}
                            </Text>
                          </Flex>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                      <Button 
                        className={`w-full py-3 font-medium ${
                          isPopular 
                            ? 'bg-teal-600 hover:bg-teal-700 text-white'
                            : 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                        }`}
                        variant={isPopular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                      
                      <Text className="text-xs text-gray-500 text-center">
                        14-day free trial • No credit card required
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Grid>

        {/* Feature Comparison Table */}
        <div className="bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
              Compare all features
            </Text>
            <Text className="text-gray-600">
              See exactly what's included in each plan
            </Text>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6">
                    <Text className="font-semibold text-gray-900">Features</Text>
                  </th>
                  {Object.entries(currentPlans).map(([key, plan]) => (
                    <th key={key} className="text-center py-4 px-6">
                      <Text className="font-semibold text-gray-900">{plan.name}</Text>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentPlans.starter.features.map((feature, index) => (
                  <tr key={index} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6">
                      <Text className="text-gray-700">{feature.name}</Text>
                    </td>
                    {Object.entries(currentPlans).map(([key, plan]) => (
                      <td key={key} className="text-center py-4 px-6">
                        {plan.features[index]?.included ? (
                          <CheckIcon className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <XIcon className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-12">
          <div className="text-center">
            <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </Text>
            <Text className="text-gray-600">
              Everything you need to know about our pricing and plans
            </Text>
          </div>
          
          <Grid lg="2" className="gap-8">
            <div className="space-y-8">
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  Can I change plans anytime?
                </Text>
                <Text className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  What happens during the free trial?
                </Text>
                <Text className="text-gray-600">
                  You get full access to all Professional plan features for 14 days. No credit card required. If you don't upgrade, your account will move to our free tier.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer refunds?
                </Text>
                <Text className="text-gray-600">
                  Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll provide a full refund.
                </Text>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  Are there any setup fees?
                </Text>
                <Text className="text-gray-600">
                  No setup fees or hidden costs. The price you see is exactly what you'll pay. We include onboarding and training at no extra charge.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </Text>
                <Text className="text-gray-600">
                  We accept all major credit cards, PayPal, and ACH transfers for annual plans. Enterprise customers can also pay by invoice.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get a custom enterprise plan?
                </Text>
                <Text className="text-gray-600">
                  Absolutely! We offer custom plans for large organizations with specific requirements. Contact our sales team to discuss your needs.
                </Text>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </SectionContainer>
  );
}
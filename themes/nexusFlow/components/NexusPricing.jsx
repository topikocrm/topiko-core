"use client";

import { useState } from "react";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  CheckIcon, 
  XIcon, 
  StarIcon,
  ZapIcon,
  CrownIcon,
  RocketIcon
} from "lucide-react";

const plans = {
  monthly: {
    starter: {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: 29,
      icon: ZapIcon,
      color: "from-blue-500 to-blue-600",
      features: [
        { name: "Up to 5 team members", included: true },
        { name: "100 automations/month", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Standard integrations", included: true },
        { name: "Advanced workflows", included: false },
        { name: "Custom reports", included: false },
        { name: "Priority support", included: false },
        { name: "SSO & SAML", included: false },
        { name: "Audit logs", included: false }
      ],
      cta: "Start Free Trial",
      popular: false
    },
    professional: {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      price: 89,
      icon: RocketIcon,
      color: "from-purple-500 to-purple-600",
      features: [
        { name: "Up to 25 team members", included: true },
        { name: "1,000 automations/month", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Premium integrations", included: true },
        { name: "Advanced workflows", included: true },
        { name: "Custom reports", included: true },
        { name: "API access", included: true },
        { name: "SSO & SAML", included: false },
        { name: "Audit logs", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: 299,
      icon: CrownIcon,
      color: "from-indigo-500 to-indigo-600",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Unlimited automations", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "24/7 phone & priority support", included: true },
        { name: "All integrations", included: true },
        { name: "Advanced workflows", included: true },
        { name: "Custom reports & dashboards", included: true },
        { name: "Full API access", included: true },
        { name: "SSO & SAML", included: true },
        { name: "Audit logs & compliance", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  },
  yearly: {
    starter: { ...plans?.monthly?.starter, price: 24 },  // 17% off
    professional: { ...plans?.monthly?.professional, price: 74 }, // 17% off  
    enterprise: { ...plans?.monthly?.enterprise, price: 249 } // 17% off
  }
};

// Initialize plans with proper structure
if (!plans.yearly) {
  plans.yearly = {
    starter: { ...plans.monthly.starter, price: 24 },
    professional: { ...plans.monthly.professional, price: 74 },
    enterprise: { ...plans.monthly.enterprise, price: 249 }
  };
}

const addOns = [
  {
    name: "Advanced Security Pack",
    description: "Enhanced security features and compliance tools",
    price: { monthly: 49, yearly: 39 },
    features: ["Advanced encryption", "Compliance reporting", "Security monitoring"]
  },
  {
    name: "Premium Integrations",
    description: "Access to 500+ premium app integrations",
    price: { monthly: 29, yearly: 24 },
    features: ["Enterprise apps", "Custom connectors", "Priority sync"]
  },
  {
    name: "White Label Solution",
    description: "Fully customizable branding and interface",
    price: { monthly: 99, yearly: 79 },
    features: ["Custom branding", "White label mobile app", "Custom domain"]
  }
];

export default function NexusPricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const currentPlans = isYearly ? plans.yearly : plans.monthly;
  const billingPeriod = isYearly ? "yearly" : "monthly";
  const savings = isYearly ? 17 : 0;

  const handleAddOnToggle = (index) => {
    setSelectedAddOns(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <SectionContainer sectionClassName="bg-white py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            💰 Simple Pricing
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the perfect plan
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}for your team
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start with a 14-day free trial. No credit card required. 
              Cancel or upgrade anytime.
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
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600"
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
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`h-full rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  isPopular 
                    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}>
                  <div className="space-y-6">
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
                          <Text className="text-gray-600">
                            {plan.description}
                          </Text>
                        </div>
                      </div>
                      
                      <div className="flex items-baseline space-x-2">
                        <Text className="text-4xl font-bold text-gray-900">
                          ${plan.price}
                        </Text>
                        <Text className="text-gray-600">
                          /{isYearly ? 'month' : 'month'}
                        </Text>
                        {isYearly && (
                          <Text className="text-sm text-gray-500 line-through">
                            ${plans.monthly[key].price}
                          </Text>
                        )}
                      </div>
                      
                      {isYearly && (
                        <Text className="text-sm text-green-600 font-medium">
                          Billed yearly - Save ${(plans.monthly[key].price - plan.price) * 12}/year
                        </Text>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <Flex key={index} align="center" className="space-x-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            feature.included 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {feature.included ? (
                              <CheckIcon className="w-3 h-3" />
                            ) : (
                              <XIcon className="w-3 h-3" />
                            )}
                          </div>
                          <Text className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.name}
                          </Text>
                        </Flex>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      className={`w-full py-3 ${
                        isPopular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
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
            );
          })}
        </Grid>

        {/* Add-ons Section */}
        <div className="space-y-8">
          <div className="text-center">
            <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
              Enhance your plan with add-ons
            </Text>
            <Text className="text-gray-600">
              Customize your NexusFlow experience with these optional features
            </Text>
          </div>
          
          <Grid lg="3" className="gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="space-y-4">
                  <Flex align="center" justify="between">
                    <Text className="text-lg font-semibold text-gray-900">
                      {addOn.name}
                    </Text>
                    <Checkbox
                      checked={selectedAddOns.includes(index)}
                      onCheckedChange={() => handleAddOnToggle(index)}
                    />
                  </Flex>
                  
                  <Text className="text-gray-600 text-sm">
                    {addOn.description}
                  </Text>
                  
                  <div className="flex items-center space-x-2">
                    <Text className="text-2xl font-bold text-gray-900">
                      ${addOn.price[billingPeriod]}
                    </Text>
                    <Text className="text-gray-600">
                      /month
                    </Text>
                  </div>
                  
                  <div className="space-y-2">
                    {addOn.features.map((feature, featureIndex) => (
                      <Flex key={featureIndex} align="center" className="space-x-2">
                        <CheckIcon className="w-4 h-4 text-green-600" />
                        <Text className="text-sm text-gray-700">{feature}</Text>
                      </Flex>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <Text as="h3" className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </Text>
          </div>
          
          <Grid lg="2" className="gap-8">
            <div className="space-y-6">
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change my plan anytime?
                </Text>
                <Text className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  What happens after my free trial?
                </Text>
                <Text className="text-gray-600">
                  Your account will be automatically downgraded to our free tier. No charges apply unless you choose to upgrade.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer refunds?
                </Text>
                <Text className="text-gray-600">
                  We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.
                </Text>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a setup fee?
                </Text>
                <Text className="text-gray-600">
                  No setup fees, no hidden costs. Pay only for your monthly or yearly subscription.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  Can I get a custom plan?
                </Text>
                <Text className="text-gray-600">
                  Yes, we offer custom enterprise plans. Contact our sales team to discuss your specific needs.
                </Text>
              </div>
              
              <div>
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </Text>
                <Text className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
                </Text>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </SectionContainer>
  );
}
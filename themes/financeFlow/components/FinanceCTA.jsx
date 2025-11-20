"use client";

import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRightIcon, 
  CheckIcon,
  TrendingUpIcon,
  ShieldIcon,
  ZapIcon,
  HeartIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon
} from "lucide-react";
import Link from "next/link";

export default function FinanceCTA() {
  return (
    <div className="space-y-0">
      {/* Main CTA Section */}
      <SectionContainer sectionClassName="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                🚀 Ready to Transform Your Finance Operations?
              </Badge>
              
              <div>
                <Text as="h2" className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Start your revenue growth{" "}
                  <span className="text-cyan-200">
                    journey today
                  </span>
                </Text>
                <Text className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                  Join 10,000+ finance professionals who trust FinanceFlow to drive predictable revenue growth. 
                  Get started with our 14-day free trial.
                </Text>
              </div>
            </div>

            {/* CTA Buttons */}
            <Flex justify="center" align="center" className="space-x-6">
              <Button 
                size="lg" 
                className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border-2 border-white/30 hover:bg-white/10 font-semibold backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </Flex>

            {/* Trust Indicators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Grid lg="3" className="gap-8 text-center">
                <div className="space-y-3">
                  <ShieldIcon className="w-8 h-8 text-cyan-200 mx-auto" />
                  <Text className="font-semibold text-white">Enterprise Security</Text>
                  <Text className="text-sm text-cyan-100">SOC 2 certified, bank-grade encryption</Text>
                </div>
                
                <div className="space-y-3">
                  <ZapIcon className="w-8 h-8 text-cyan-200 mx-auto" />
                  <Text className="font-semibold text-white">Quick Setup</Text>
                  <Text className="text-sm text-cyan-100">Connect your tools in under 5 minutes</Text>
                </div>
                
                <div className="space-y-3">
                  <TrendingUpIcon className="w-8 h-8 text-cyan-200 mx-auto" />
                  <Text className="font-semibold text-white">Proven Results</Text>
                  <Text className="text-sm text-cyan-100">94% forecast accuracy guarantee</Text>
                </div>
              </Grid>
            </div>

            {/* Guarantee */}
            <div className="flex items-center justify-center space-x-3">
              <CheckIcon className="w-5 h-5 text-green-300" />
              <Text className="text-cyan-100">
                30-day money-back guarantee • Cancel anytime • No setup fees
              </Text>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Newsletter Section */}
      <SectionContainer sectionClassName="bg-gray-50 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div>
            <Text as="h3" className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay ahead of finance trends
            </Text>
            <Text className="text-gray-600">
              Get weekly insights, AI trends, and revenue optimization tips delivered to your inbox.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <Flex className="space-x-4">
              <Input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
                Subscribe
              </Button>
            </Flex>
            <Text className="text-xs text-gray-500 mt-3 text-left">
              Join 25,000+ subscribers. Unsubscribe anytime.
            </Text>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <SectionContainer sectionClassName="bg-gray-900 py-16">
        <div className="space-y-12">
          {/* Main Footer Content */}
          <Grid lg="4" className="gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <Text className="text-2xl font-bold text-white mb-3">FinanceFlow</Text>
                <Text className="text-gray-400 leading-relaxed">
                  The AI-powered revenue platform that helps finance teams make smarter decisions 
                  and drive predictable growth.
                </Text>
              </div>
              
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MailIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <Text className="text-white font-semibold mb-6">Product</Text>
              <div className="space-y-4">
                {['Features', 'Integrations', 'Pricing', 'API', 'Security', 'Changelog'].map((item) => (
                  <div key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <Text className="text-white font-semibold mb-6">Company</Text>
              <div className="space-y-4">
                {['About', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'].map((item) => (
                  <div key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <Text className="text-white font-semibold mb-6">Resources</Text>
              <div className="space-y-4">
                {['Documentation', 'Help Center', 'Community', 'Webinars', 'Case Studies', 'Templates'].map((item) => (
                  <div key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Grid>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <Flex justify="between" align="center" className="flex-col lg:flex-row space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-6">
                <Text className="text-gray-400 text-sm">
                  © 2024 FinanceFlow. All rights reserved.
                </Text>
                <div className="flex items-center space-x-1 text-gray-400 text-sm">
                  <Text>Made with</Text>
                  <HeartIcon className="w-4 h-4 text-red-500" />
                  <Text>for finance teams</Text>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </Flex>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
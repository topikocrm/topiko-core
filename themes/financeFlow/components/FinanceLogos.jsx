"use client";

import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Flex from "@/components/ui/flex";

const companies = [
  { name: "Stripe", logo: "S" },
  { name: "Shopify", logo: "Sp" },
  { name: "Zoom", logo: "Z" },
  { name: "Slack", logo: "Sl" },
  { name: "Airbnb", logo: "A" },
  { name: "Uber", logo: "U" },
  { name: "Netflix", logo: "N" },
  { name: "Spotify", logo: "Sp" }
];

export default function FinanceLogos() {
  return (
    <SectionContainer sectionClassName="bg-white py-16">
      <div className="text-center space-y-12">
        {/* Section Title */}
        <div>
          <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Trusted by finance teams at
          </Text>
          <Text className="text-lg text-gray-600">
            Join 10,000+ finance professionals at leading companies
          </Text>
        </div>

        {/* Company Logos Grid */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/30 to-transparent"></div>
          
          <Grid lg="4" className="gap-8 items-center relative z-10">
            {companies.slice(0, 8).map((company, index) => (
              <Flex key={index} align="center" justify="center" className="group cursor-pointer">
                <div className="flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 group-hover:bg-teal-50/50">
                  {/* Logo placeholder */}
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center group-hover:from-teal-200 group-hover:to-teal-300 transition-all duration-300">
                    <Text className="font-bold text-gray-600 group-hover:text-teal-700">
                      {company.logo}
                    </Text>
                  </div>
                  
                  {/* Company name */}
                  <Text className="font-semibold text-gray-600 group-hover:text-teal-700 transition-colors duration-300">
                    {company.name}
                  </Text>
                </div>
              </Flex>
            ))}
          </Grid>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
          <Grid lg="3" className="gap-8 text-center">
            <div>
              <Text className="text-3xl font-bold text-teal-600 mb-2">$2.5B+</Text>
              <Text className="text-sm font-medium text-gray-600">Revenue Tracked Monthly</Text>
              <Text className="text-xs text-gray-500 mt-1">Across all platforms</Text>
            </div>
            
            <div>
              <Text className="text-3xl font-bold text-teal-600 mb-2">10,000+</Text>
              <Text className="text-sm font-medium text-gray-600">Finance Professionals</Text>
              <Text className="text-xs text-gray-500 mt-1">Using our platform daily</Text>
            </div>
            
            <div>
              <Text className="text-3xl font-bold text-teal-600 mb-2">94%</Text>
              <Text className="text-sm font-medium text-gray-600">Forecast Accuracy</Text>
              <Text className="text-xs text-gray-500 mt-1">AI-powered predictions</Text>
            </div>
          </Grid>
        </div>

        {/* Additional Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Text className="font-semibold text-gray-900 mb-1">SOC 2 Certified</Text>
            <Text className="text-sm text-gray-600">Enterprise-grade security</Text>
          </div>
          
          <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Text className="font-semibold text-gray-900 mb-1">99.9% Uptime</Text>
            <Text className="text-sm text-gray-600">Reliable platform availability</Text>
          </div>
          
          <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <Text className="font-semibold text-gray-900 mb-1">4.9/5 Rating</Text>
            <Text className="text-sm text-gray-600">Customer satisfaction score</Text>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
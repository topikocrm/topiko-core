"use client";

import { useState } from "react";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Grid from "@/components/ui/grid";
import Box from "@/components/ui/box";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ZapIcon,
  TwitterIcon,
  LinkedinIcon,
  GitlabIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
  HeartIcon
} from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api" },
      { name: "Security", href: "/security" },
      { name: "Changelog", href: "/changelog" }
    ]
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "For Startups", href: "/startups" },
      { name: "For Enterprise", href: "/enterprise" },
      { name: "For Agencies", href: "/agencies" },
      { name: "For E-commerce", href: "/ecommerce" },
      { name: "For Healthcare", href: "/healthcare" },
      { name: "For Education", href: "/education" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Blog", href: "/blog" },
      { name: "Community", href: "/community" },
      { name: "Webinars", href: "/webinars" },
      { name: "Templates", href: "/templates" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Investors", href: "/investors" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" }
    ]
  }
};

const socialLinks = [
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com/nexusflow", followers: "15K" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/company/nexusflow", followers: "8K" },
  { name: "GitHub", icon: GitlabIcon, href: "https://github.com/nexusflow", followers: "12K" },
  { name: "YouTube", icon: YoutubeIcon, href: "https://youtube.com/nexusflow", followers: "5K" }
];

const awards = [
  { name: "G2 Leader", category: "Workflow Automation", year: "2024" },
  { name: "Product Hunt", category: "#1 Product of the Day", year: "2024" },
  { name: "TechCrunch", category: "Startup Battlefield", year: "2023" },
  { name: "Fast Company", category: "Most Innovative", year: "2024" }
];

export default function NexusFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <SectionContainer sectionClassName="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="text-center space-y-8">
          <div>
            <Text as="h3" className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay in the loop
            </Text>
            <Text className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get the latest product updates, automation tips, and success stories 
              delivered to your inbox every week.
            </Text>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <Flex className="space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/20 border-white/30 placeholder-white/70 text-white focus:bg-white/30 focus:border-white/50"
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </Flex>
              <Text className="text-sm text-blue-100 mt-3">
                Join 25,000+ subscribers • No spam, unsubscribe anytime
              </Text>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30">
              <Flex align="center" justify="center" className="space-x-3 mb-3">
                <CheckIcon className="w-6 h-6 text-green-300" />
                <Text className="text-lg font-semibold">Successfully subscribed!</Text>
              </Flex>
              <Text className="text-blue-100">
                Thank you for joining our community. Check your email for a welcome message.
              </Text>
            </div>
          )}

          {/* Social Proof */}
          <Grid lg="4" className="gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Text className="text-2xl font-bold text-white">25K+</Text>
              <Text className="text-blue-100 text-sm">Newsletter Subscribers</Text>
            </div>
            <div className="text-center">
              <Text className="text-2xl font-bold text-white">4.9/5</Text>
              <Text className="text-blue-100 text-sm">Customer Satisfaction</Text>
            </div>
            <div className="text-center">
              <Text className="text-2xl font-bold text-white">99.9%</Text>
              <Text className="text-blue-100 text-sm">Platform Uptime</Text>
            </div>
            <div className="text-center">
              <Text className="text-2xl font-bold text-white">24/7</Text>
              <Text className="text-blue-100 text-sm">Customer Support</Text>
            </div>
          </Grid>
        </div>
      </SectionContainer>

      {/* Main Footer */}
      <SectionContainer sectionClassName="bg-gray-900 py-16">
        <div className="space-y-12">
          {/* Top Section */}
          <Grid lg="3" className="gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Flex align="center" className="space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <ZapIcon className="w-6 h-6 text-white" />
                </div>
                <Text as="h3" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NexusFlow
                </Text>
              </Flex>
              
              <Text className="text-gray-400 leading-relaxed">
                The complete workflow automation platform that helps teams work smarter, 
                not harder. Trusted by thousands of companies worldwide.
              </Text>

              {/* Contact Info */}
              <div className="space-y-3">
                <Flex align="center" className="space-x-3 text-gray-400">
                  <MailIcon className="w-5 h-5" />
                  <Text>hello@nexusflow.com</Text>
                </Flex>
                <Flex align="center" className="space-x-3 text-gray-400">
                  <PhoneIcon className="w-5 h-5" />
                  <Text>+1 (555) 123-4567</Text>
                </Flex>
                <Flex align="center" className="space-x-3 text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <Text>123 Innovation St, San Francisco, CA</Text>
                </Flex>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <Text className="text-white font-semibold">Follow us</Text>
                <Flex className="space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </a>
                    );
                  })}
                </Flex>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-2">
              <Grid lg="5" className="gap-8">
                {Object.entries(footerLinks).map(([key, section]) => (
                  <div key={key}>
                    <Text className="text-white font-semibold mb-4">
                      {section.title}
                    </Text>
                    <ul className="space-y-3">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Grid>
            </div>
          </Grid>

          {/* Awards Section */}
          <div className="border-t border-gray-800 pt-12">
            <div className="text-center mb-8">
              <Text className="text-xl font-semibold text-white mb-2">
                Recognized by industry leaders
              </Text>
              <Text className="text-gray-400">
                Awards and recognition we've received for our innovation
              </Text>
            </div>
            
            <Grid lg="4" className="gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-3">
                    {award.year}
                  </Badge>
                  <Text className="text-white font-semibold mb-1">
                    {award.name}
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    {award.category}
                  </Text>
                </div>
              ))}
            </Grid>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <Flex justify="between" align="center" className="flex-col lg:flex-row space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-6 text-gray-400">
                <Text className="text-sm">
                  © 2024 NexusFlow Inc. All rights reserved.
                </Text>
                <Text className="text-sm">
                  Built with <HeartIcon className="inline w-4 h-4 text-red-500" /> in San Francisco
                </Text>
              </div>

              <div className="flex items-center space-x-6">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  ✓ SOC 2 Compliant
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  ✓ GDPR Ready
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  ✓ ISO 27001
                </Badge>
              </div>
            </Flex>
          </div>

          {/* Status Bar */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <Flex justify="between" align="center">
              <Flex align="center" className="space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Text className="text-sm text-gray-300">All systems operational</Text>
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <Text className="text-sm text-gray-400">
                  Last updated: 2 minutes ago
                </Text>
              </Flex>

              <Flex align="center" className="space-x-6 text-sm text-gray-400">
                <span>API: 99.99% uptime</span>
                <span>CDN: Global</span>
                <span>Support: 24/7</span>
              </Flex>
            </Flex>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
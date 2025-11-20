"use client";

import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Flex from "@/components/ui/flex";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BarChart3Icon, TrendingUpIcon, UsersIcon, CreditCardIcon } from "lucide-react";

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
};

export default function FinanceHeader() {
  return (
    <SectionContainer 
      sectionClassName="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm"
      className="py-0"
    >
      <Flex justify="between" align="center" className="py-4">
        {/* Logo */}
        <Flex align="center" className="space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
            <BarChart3Icon className="w-5 h-5 text-white" />
          </div>
          <Text as="h1" className="text-xl font-bold text-gray-900">
            FinanceFlow
          </Text>
        </Flex>
        
        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-500/20 to-cyan-600/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <BarChart3Icon className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          AI Revenue Platform
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Advanced revenue intelligence for next-generation finance teams.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Revenue Analytics" href="/analytics">
                    Real-time revenue insights and forecasting powered by AI.
                  </ListItem>
                  <ListItem title="Financial Planning" href="/planning">
                    Strategic financial planning and budget optimization.
                  </ListItem>
                  <ListItem title="Team Collaboration" href="/collaboration">
                    Seamless collaboration tools for finance teams.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium">
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="AI Insights" href="/ai-insights">
                    Machine learning-powered financial intelligence.
                  </ListItem>
                  <ListItem title="Revenue Operations" href="/revenue-ops">
                    Streamline your revenue operations workflow.
                  </ListItem>
                  <ListItem title="Forecasting" href="/forecasting">
                    Accurate revenue forecasting and planning.
                  </ListItem>
                  <ListItem title="Integrations" href="/integrations">
                    Connect with your existing financial tools.
                  </ListItem>
                  <ListItem title="Security" href="/security">
                    Enterprise-grade security and compliance.
                  </ListItem>
                  <ListItem title="API" href="/api">
                    Powerful APIs for custom integrations.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium">
                Resources
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium">
                Company
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <Flex align="center" className="space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-gray-600 hover:text-gray-900 font-medium">
            Sign In
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6">
            Get Started
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </Flex>
      </Flex>
    </SectionContainer>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import SectionContainer from "@/components/ui/section-container";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ZapIcon, BarChart3Icon, UsersIcon, CogIcon } from "lucide-react";

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

export default function NexusHeader() {
  return (
    <SectionContainer 
      sectionClassName="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-indigo-200/50 backdrop-blur-sm sticky top-0 z-50"
      className="py-0"
    >
      <Flex justify="between" align="center" className="py-4">
        {/* Logo */}
        <Flex align="center" className="space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <ZapIcon className="w-5 h-5 text-white" />
          </div>
          <Text as="h1" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            NexusFlow
          </Text>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Beta
          </Badge>
        </Flex>
        
        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-purple-600/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <ZapIcon className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          NexusFlow
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          The complete workflow automation platform for modern teams.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Workflow Builder" href="/workflows">
                    Create custom workflows with our drag-and-drop builder.
                  </ListItem>
                  <ListItem title="Analytics Dashboard" href="/analytics">
                    Track performance and optimize your processes.
                  </ListItem>
                  <ListItem title="Team Collaboration" href="/collaboration">
                    Work together seamlessly across departments.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="For Startups" href="/startups">
                    Scale your operations with automated workflows.
                  </ListItem>
                  <ListItem title="For Enterprise" href="/enterprise">
                    Enterprise-grade security and compliance features.
                  </ListItem>
                  <ListItem title="For Agencies" href="/agencies">
                    Manage multiple clients with ease.
                  </ListItem>
                  <ListItem title="For E-commerce" href="/ecommerce">
                    Automate your entire sales funnel.
                  </ListItem>
                  <ListItem title="For Healthcare" href="/healthcare">
                    HIPAA-compliant workflow solutions.
                  </ListItem>
                  <ListItem title="For Education" href="/education">
                    Streamline administrative processes.
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
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <Flex align="center" className="space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-gray-600 hover:text-gray-900">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Free Trial
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
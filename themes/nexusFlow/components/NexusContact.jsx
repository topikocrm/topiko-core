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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  CalendarIcon,
  UsersIcon,
  ClockIcon
} from "lucide-react";

const contactMethods = [
  {
    name: "Email Support",
    description: "Get help via email within 24 hours",
    icon: MailIcon,
    contact: "support@nexusflow.com",
    availability: "24/7",
    responseTime: "< 24 hours"
  },
  {
    name: "Phone Support",
    description: "Talk to our experts directly",
    icon: PhoneIcon,
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM PST",
    responseTime: "Immediate"
  },
  {
    name: "Live Chat",
    description: "Chat with our team in real-time",
    icon: MessageSquareIcon,
    contact: "Available on website",
    availability: "Mon-Fri 9AM-9PM PST",
    responseTime: "< 2 minutes"
  },
  {
    name: "Office Visit",
    description: "Visit our headquarters",
    icon: MapPinIcon,
    contact: "123 Innovation St, San Francisco, CA",
    availability: "Mon-Fri 9AM-5PM PST",
    responseTime: "By appointment"
  }
];

const inquiryTypes = [
  { value: "sales", label: "Sales Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Product Feedback" },
  { value: "other", label: "Other" }
];

const companySizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-1000", label: "201-1,000 employees" },
  { value: "1000+", label: "1,000+ employees" }
];

export default function NexusContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    inquiryType: "",
    message: "",
    newsletter: false,
    demo: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companySize: "",
      inquiryType: "",
      message: "",
      newsletter: false,
      demo: false
    });
    setIsSubmitted(false);
  };

  return (
    <SectionContainer sectionClassName="bg-white py-24">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            💬 Get In Touch
          </Badge>
          
          <div>
            <Text as="h2" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We'd love to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}hear from you
              </span>
            </Text>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about NexusFlow? Want to schedule a demo? 
              Our team is here to help you succeed.
            </Text>
          </div>
        </div>

        <Grid lg="2" className="gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <Text as="h3" className="text-2xl font-bold text-gray-900 mb-6">
                Get support
              </Text>
              <Text className="text-gray-600 mb-8">
                Choose the best way to reach our team. We're here to help you 
                make the most of NexusFlow.
              </Text>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <Flex align="center" className="space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <Text className="text-lg font-semibold text-gray-900 mb-1">
                          {method.name}
                        </Text>
                        <Text className="text-gray-600 text-sm mb-2">
                          {method.description}
                        </Text>
                        <Text className="text-blue-600 font-medium text-sm mb-2">
                          {method.contact}
                        </Text>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>• {method.availability}</span>
                          <span>• Response: {method.responseTime}</span>
                        </div>
                      </div>
                    </Flex>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Text className="text-lg font-semibold text-gray-900">
                Quick actions
              </Text>
              
              <div className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-3 w-5 h-5" />
                      Schedule a Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule a Demo</DialogTitle>
                      <DialogDescription>
                        Choose a time that works for you and we'll show you how NexusFlow 
                        can transform your workflow.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        <CalendarIcon className="mr-2 w-5 h-5" />
                        Book 30-min Demo
                      </Button>
                      <Text className="text-sm text-gray-600 text-center">
                        Available Monday-Friday, 9AM-5PM PST
                      </Text>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" className="w-full justify-start">
                  <UsersIcon className="mr-3 w-5 h-5" />
                  Join Community Forum
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquareIcon className="mr-3 w-5 h-5" />
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Text as="h3" className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </Text>
                  <Text className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </Text>
                </div>

                {/* Name Fields */}
                <Grid lg="2" className="gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </Grid>

                {/* Contact Info */}
                <Grid lg="2" className="gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </Grid>

                {/* Company Info */}
                <Grid lg="2" className="gap-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select onValueChange={(value) => handleInputChange("companySize", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </Grid>

                {/* Inquiry Type */}
                <div>
                  <Label>What can we help you with? *</Label>
                  <RadioGroup 
                    value={formData.inquiryType}
                    onValueChange={(value) => handleInputChange("inquiryType", value)}
                    className="mt-3"
                  >
                    <Grid lg="2" className="gap-2">
                      {inquiryTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label htmlFor={type.value} className="text-sm">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </Grid>
                  </RadioGroup>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about how we can help you..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for product updates and tips
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="demo"
                      checked={formData.demo}
                      onCheckedChange={(checked) => handleInputChange("demo", checked)}
                    />
                    <Label htmlFor="demo" className="text-sm">
                      I'm interested in scheduling a personalized demo
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <SendIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                <Text className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </Text>
              </form>
            ) : (
              /* Success State */
              <div className="text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-8 h-8 text-green-600" />
                </div>
                
                <div>
                  <Text as="h3" className="text-2xl font-bold text-gray-900 mb-2">
                    Message sent successfully!
                  </Text>
                  <Text className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </Text>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <Text className="text-sm text-gray-600 mb-4">
                    What happens next:
                  </Text>
                  <div className="space-y-3 text-left">
                    <Flex align="center" className="space-x-3">
                      <ClockIcon className="w-5 h-5 text-blue-600" />
                      <Text className="text-sm">We'll review your message within 2 hours</Text>
                    </Flex>
                    <Flex align="center" className="space-x-3">
                      <MailIcon className="w-5 h-5 text-blue-600" />
                      <Text className="text-sm">You'll receive a response within 24 hours</Text>
                    </Flex>
                    <Flex align="center" className="space-x-3">
                      <CalendarIcon className="w-5 h-5 text-blue-600" />
                      <Text className="text-sm">If needed, we'll schedule a follow-up call</Text>
                    </Flex>
                  </div>
                </div>

                <Button 
                  onClick={resetForm}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </Grid>
      </div>
    </SectionContainer>
  );
}
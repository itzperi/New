import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}
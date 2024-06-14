'use client';
import {
  Navbar,
  Hero,
  WhatWeDo,
  Service,
  Pricing,
  Testinoni,
  Footer,
} from '@/components/landingPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Service />
      <Pricing />
      <Testinoni />
      <Footer />
    </>
  );
}

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PipelinePreview from '../components/PipelinePreview';
import QRShowcase from '../components/QRShowcase';
import ContactsPreview from '../components/ContactsPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7FF]">
      <Header />
      <main>
        <Hero />
        <Features />
        <PipelinePreview />
        <QRShowcase />
        <ContactsPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

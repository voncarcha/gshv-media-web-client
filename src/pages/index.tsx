import React from 'react';
import type { NextPage } from 'next';
import Page from 'layouts/Page';
import Header from 'components/Header';
import Partnership from 'components/Partnership';
import Expertise from 'components/Expertise';
import Features from 'components/Features';
import MarketingServices from 'components/MarketingServices';
import TechServices from 'components/TechServices';
import Support from 'components/Support';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import TopNav from 'components/TopNav';

const Home: NextPage = () => {
  return (
    <Page>
      <TopNav />
      <Header />
      <Partnership />
      <Expertise />
      <Features />
      <MarketingServices />
      <TechServices />
      <Support />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
};

export default Home;

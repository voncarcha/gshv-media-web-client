import Footer from 'components/Footer';
import HeaderSecondary from 'components/HeaderSecondary';
import PrivacyContent from 'components/PrivacyContent';
import TopNav from 'components/TopNav';
import Page from 'layouts/Page';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <Page>
      <TopNav />
      <HeaderSecondary title="Privacy and Cookie Policies" />
      <PrivacyContent />
      <Footer />
    </Page>
  );
};

export default PrivacyPolicy;

import Footer from 'components/Footer';
import HeaderSecondary from 'components/HeaderSecondary';
import TermsContent from 'components/TermsContent';
import TopNav from 'components/TopNav';
import Page from 'layouts/Page';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <Page>
      <TopNav />
      <HeaderSecondary title="Terms and Conditions" />
      <TermsContent />
      <Footer />
    </Page>
  );
};

export default TermsAndConditions;

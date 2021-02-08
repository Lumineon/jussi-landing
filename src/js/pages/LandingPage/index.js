import React from 'react';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import MainBanner from './components/Banner';
import MainStoresBar from './components/MainStoresBar';
import Solutions from './components/Solutions';
import MeetUs from './components/MeetUs';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';

import * as S from './styled';

function LandingPage() {
  return (
    <>
      <S.TopWrapper>
        <Header />
      </S.TopWrapper>

      <S.CoreWrapper>
        <MainBanner />
        <MainStoresBar />
        <Solutions />
        <MeetUs />
        <Contact />
        <Newsletter />
      </S.CoreWrapper>

      <S.BottomWrapper>
        <Footer />
      </S.BottomWrapper>
    </>
  );
}

export default LandingPage;

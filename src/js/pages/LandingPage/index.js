import React from 'react';

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Solutions from '../../containers/Solutions';
import Newsletter from '../../containers/Newsletter';

import MainBanner from './components/Banner';
import MainStoresBar from './components/MainStoresBar';
import MeetUs from './components/MeetUs';
import Contact from './components/Contact';

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

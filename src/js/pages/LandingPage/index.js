import React from 'react';

import Header from '../../containers/Header/index';
import Footer from '../../containers/Footer/index';

import MainBanner from './components/Banner/index';
import MainStoresBar from './components/MainStoresBar/index';
import Solutions from './components/Solutions/index';
import MeetUs from './components/MeetUs/index';
import Contact from './components/Contact/index';
import Newsletter from './components/Newsletter/index';

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

import React from 'react';

import { ReactComponent as Arrow } from '../../../../icons/general/icon-seta.svg'
import { ReactComponent as BrastempLogo } from '../../../../icons/company-logos/logo-brastemp.svg';
import { ReactComponent as CompraFacilLogo } from '../../../../icons/company-logos/logo-compra.svg';
import { ReactComponent as ConsulLogo } from '../../../../icons/company-logos/logo-consul.svg';
import { ReactComponent as TheBarLogo } from '../../../../icons/company-logos/logo-thebar.svg';

import * as S from './styled';

const MainStoresBar = () => {
  return (
    <S.StoresBarWrapper>
      <S.StoresBarContent>
        <span>Nossas principais lojas VTEX</span>
        <Arrow />
        <BrastempLogo />
        <CompraFacilLogo />
        <ConsulLogo />
        <TheBarLogo />
      </S.StoresBarContent>
    </S.StoresBarWrapper>
  );

};

export default MainStoresBar;
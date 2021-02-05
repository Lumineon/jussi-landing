import React from 'react';

import Fridge from '../../../images/geladeira.png';
import Drink from '../../../images/whisky.png';
import Mixer from '../../../images/batedeira.png';

import * as S from './styled';

const images = [
  {
    name: 'Batedeira',
    image: Mixer,
    link: 'Comprar em 12x'
  },
  {
    name: 'Geladeira',
    image: Fridge,
    link: 'Mais Detalhes'
  },
  {
    name: 'Whisky',
    image: Drink,
    link: 'Adicionar à sacola'
  },
];

const MainBanner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerContent>
        <S.TwoBars>
          {`//`}
        </S.TwoBars>
        <S.BannerText>
          <h1>Criamos lojas que vendem mais.</h1>
          <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. 
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button>Veja nossas soluções</button>
        </S.BannerText>
        <S.BannerProducts>
          {images.map(({
            name, image, link
          }) => (
            <S.BannerImagesWrapper className={name} key={name}>
              <S.BannerImage src={image} alt={name} />
              <S.BannerLink>{link}</S.BannerLink>
            </S.BannerImagesWrapper>
          ))}
        </S.BannerProducts>
      </S.BannerContent>
    </S.BannerWrapper>
  );

};

export default MainBanner;
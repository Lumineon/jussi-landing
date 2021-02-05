import React from 'react';

import productList from '../../../../../../resources/products';

import * as S from './styled';

const Card = () => {
  return (
    <S.CardWrapper>
      <S.CardContent>
          {productList.map(({
            id, name, image, description, link, features,
          }) => (
            <S.CardItem key={id}>
              <S.CardImage>{image}</S.CardImage>
              <S.CardName>{name}</S.CardName>
              <S.CardDescription>{description}</S.CardDescription>
              <S.CardFeaturesWrapper>
                {features.map(({featureId, featureName}) => (
                  <S.CardFeatures key={featureId}>
                    {featureName}
                  </S.CardFeatures>
                  )
                )}
              </S.CardFeaturesWrapper>
              <S.CardButton href={link}>Ver Solução</S.CardButton>
            </S.CardItem>
          ))}
      </S.CardContent>
    </S.CardWrapper>
  );
};

export default Card;
import React from 'react';

import * as S from './styled';

const Newsletter = () => {
  return (
    <S.NewsletterWrapper>
      <S.NewsletterContent>
        <S.NewsletterTitle>
          <span>{`//`}</span><h2>Receba novidades da nossa área de produtos digitais.</h2>
        </S.NewsletterTitle>
      </S.NewsletterContent>
    </S.NewsletterWrapper>
  );

};

export default Newsletter;
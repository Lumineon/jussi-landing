import React, { useState } from 'react';

import * as S from './styled';

const NewsletterForm = () => {
  const placeholder = "Digite seu e-mail"
  const [inputText, setInputText] = useState('');
  return (
    <S.NewsletterFormWrapper>
      <S.NewsletterFormContent>
        <S.NewsletterInput 
          type='email'
          id="newsletterInput"
          name="newsletterInput"
          placeholder={placeholder}
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
        />
        <S.NewsletterSubmit>
          Cadastrar
        </S.NewsletterSubmit>
      </S.NewsletterFormContent>
    </S.NewsletterFormWrapper>
  );

};

export default NewsletterForm;
import React from 'react';

import JussiOffice from '../../../../../images/image-jussi.png';

import * as S from './styled';

const MeetUs = () => {
  return (
    <S.MeetUsWrapper>
      <S.MeetUsContent>
        <S.MeetUsLeft>
          <h2 id='meetUs'>Olá, somos a Jüssi</h2>
          <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          <S.MeetUsButton>Conheça a Jüssi</S.MeetUsButton>
        </S.MeetUsLeft>

        <S.MeetUsRight>
          <S.MeetUsImage src={JussiOffice} />
          <S.MeetUsBackground />
        </S.MeetUsRight>

      </S.MeetUsContent>
    </S.MeetUsWrapper>
  );

};

export default MeetUs;
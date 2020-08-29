import React from 'react';
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

import unisagrado from '../../assets/unisagrado.png';

export default function Details() {
  return (
    <Container>
      <TypeTitle>Faculdade Unisagrado</TypeTitle>
      <TypeDescription>Invista no seu futuro</TypeDescription>

      <TypeImage source={unisagrado} />
      <TypeTitle>Parcelas a partir de </TypeTitle>
      <TypeDescription>R$350 reais</TypeDescription>

      <RequestButton onPress={() => {}}>
        <RequestButtonText>SOLICITAR ORÇAMENTO</RequestButtonText>
      </RequestButton>
    </Container>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound404() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada :/</h2>
      <h3>Se você está perdido, você pode </h3>
      <h3>
        <Link to="/">voltar pra página inicial</Link>
      </h3>
    </Container>
  );
}

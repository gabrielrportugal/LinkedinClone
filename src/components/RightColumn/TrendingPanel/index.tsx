import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Vantagens do HomeOffice</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Há vagas: confira oportunidades no setor de varejo</span>
              <span className="subtext">há 3 d • 1000 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Carreira jovem: como conquistar o 1º emprego na pandemia?</span>
              <span className="subtext">há 17h • 1.608 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Confiança empresarial sobe em agosto</span>
              <span className="subtext">há 17h</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Hypera Farma compra naming rights da Arena Corinthians</span>
              <span className="subtext">há 2h</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Home office indica desigualdades no Brasil</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;

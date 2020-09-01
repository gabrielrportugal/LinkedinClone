import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/gabrielrportugal.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Gabriel Portugal</h1>
        <h2>Full Stack Developer - React JS | React Native | Node JS</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">905</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">84</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;

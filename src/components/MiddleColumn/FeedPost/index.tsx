import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0?e=1606953600&v=beta&t=Z6LIUb6orpkXofRgA8eRGolidAr1vot9ViaMK2HNkr4" alt="Rocketseat" />
          <Column>
            <h3>Google</h3>
            <h4>18.576.466 Seguidores</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://media-exp1.licdn.com/dms/image/C5622AQG218nURXFBdQ/feedshare-shrink_2048_1536/0?e=1602115200&v=beta&t=87PvrwIc6lR7BWubt7YU9DM7MOEKQxPxegAxDk5NRBM"
          alt="Google Image"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;

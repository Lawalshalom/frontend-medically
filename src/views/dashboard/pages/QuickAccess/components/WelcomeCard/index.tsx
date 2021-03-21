import styled from 'styled-components';
import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StoreContext } from '../../../../../../context';
import { useContext } from 'react';

const { Title } = Typography;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1em;
  grid-template-columns: auto 50px;
  grid-template-areas: 'content avatar';
  margin-bottom: 1.5em;

  .avatar {
    grid-area: 'avatar';
  }

  .content {
    grid-area: 'content';
  }

  h2.ant-typography {
    margin-top: 0.3em;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto 50px;
    grid-template-areas: 'content avatar';
  }
`;

const content = {
  WELCOME_TEXT: 'Welcome to Medicaly',
  USER_NAME: 'User',
};

const WelcomeCard = () => {
  const { auth } = useContext(StoreContext);
  return (
    <Wrapper>
      <div className="content">
        <Title className="text_primary" level={5}>
          <span>👋</span> Hello,{' '}
          {auth.currentUser?.first_name || content.USER_NAME}
        </Title>
        <Title className="text_primary" level={2}>
          {content.WELCOME_TEXT}
        </Title>
      </div>
      <div className="avatar">
        <Avatar className="bg_primary" size={50} icon={<UserOutlined />} />
      </div>
    </Wrapper>
  );
};

export default WelcomeCard;

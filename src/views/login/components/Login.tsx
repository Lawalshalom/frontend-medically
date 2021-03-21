import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import logo from '../../../images/logo.png';
import LoginForm from './LoginForm';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(10vw, 70px);
  margin: 1em auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 150px;
  }
`;

const Login: FC = () => {
  return (
    <Wrapper>
      <Title className="text_center text_primary" level={2}>Login</Title>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;

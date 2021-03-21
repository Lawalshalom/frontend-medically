import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import logo from '../../../images/logo.png';
import RegisterationForm from './RegisterationForm';
import { classes } from '../../../shared/constants';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(10vw, 70px);
  padding-bottom: 100px;
  margin: 1em auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 150px;
  }
`;

const Register: FC = () => {
  return (
    <Wrapper>
      <Title
        className={classes.textCenter + ' ' + classes.textPrimary}
        level={2}
      >
        Sign Up
      </Title>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <RegisterationForm />
    </Wrapper>
  );
};

export default Register;

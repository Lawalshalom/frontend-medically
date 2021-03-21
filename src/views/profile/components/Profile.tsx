import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';

import { classes } from '../../../shared/constants';

import arrowLeft from '../../../images/arrow-left.png';

import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(3vw, 70px);
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  height: 170px;
  width: min(85vw, 500px);
  padding-top: 1rem;
  margin: 0 auto;

  > a {
    color: #fff;
    padding: 30px;
    margin-top: 30px;
  }

  > h3 {
    color: #fff;
  }
`;
const HeaderText = styled.h4`
  color: #fff;
  text-align: center;
  width: 45%;
`;

const Profile: FC = () => {
  return (
    <>
      <TitleWrapper className={classes.bgPrimary}>
        <Link to="/dashboard" className={classes.textLeft}>
          <img src={arrowLeft} alt="" /> Back
        </Link>
        <Title className={classes.textCenter} level={3}>
          My Profile
        </Title>
        <Divider orientation="center">
          <HeaderText>Update and modify your profile.</HeaderText>
        </Divider>
      </TitleWrapper>
      <Wrapper>
        <ProfileForm />
      </Wrapper>
    </>
  );
};

export default Profile;

import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { classes } from '../../../shared/constants';

import arrowLeft from '../../../images/arrow-left.png';

import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(3vw, 70px);
  margin: 1em auto;
`;
const TitleWrapper = styled.div`
  height: 10rem;
  width: min(85vw, 500px);
  padding-top: min(3vw, 50px);
  margin: auto;

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
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const About: FC = () => {
  return (
    <>
      <TitleWrapper className={classes.bgPrimary}>
        <Link to="/dashboard" className={classes.textLeft}>
          <img src={arrowLeft} alt="" /> Back
        </Link>
        <Title className={classes.textCenter} level={3}>
          Get in touch!
        </Title>
        <CenterDiv>
          <HeaderText>Contact us for enquiry, feedback and help.</HeaderText>
        </CenterDiv>
      </TitleWrapper>
      <Wrapper>
        <Paragraph strong className={classes.ml4}>
          <ImLocation />
          <Text className={classes.ml2}> 5 Atanda street</Text>
        </Paragraph>
        <Paragraph strong className={classes.ml4}>
          <FaPhoneAlt />
          <Text className={classes.ml2}> 08189765678</Text>
        </Paragraph>
        <Paragraph strong className={classes.ml4}>
          <FaEnvelope />
          <Text className={classes.ml2}> hello@medically.com</Text>
        </Paragraph>
        <ContactForm />
      </Wrapper>
    </>
  );
};

export default About;

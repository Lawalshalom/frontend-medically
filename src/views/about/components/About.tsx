import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { strings } from '../../../shared/constants';

import arrowLeft from '../../../images/arrow-left.png';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(3vw, 70px);
  margin: 1em auto;
`;
const TitleWrapper = styled.div`
  height: 10rem;
  width: min(85vw, 500px);
  padding-top: min(3vw, 70px);
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

const About: FC = () => {
  return (
    <>
      <TitleWrapper className={strings.bgPrimary}>
        <a href="/" className={strings.textLeft}>
          <img src={arrowLeft} alt="" /> Back
        </a>
        <Title className={strings.textCenter + ' ' + strings.mt3} level={3}>
          About Medically
        </Title>
      </TitleWrapper>
      <Wrapper>
        <p>{strings.lorem}</p>
        <p>{strings.lorem}</p>
        <p>{strings.lorem}</p>
      </Wrapper>
    </>
  );
};

export default About;

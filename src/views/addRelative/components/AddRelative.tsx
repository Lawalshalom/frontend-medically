import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import { strings } from '../../../shared/constants';
import RelativeForm from './RelativeForm';

import arrowLeft from '../../../images/arrow-left.png';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(2vw, 50px);
  margin: 0.3em auto;

  h4 {
    color: #025897;
    margin-top: 20px;
  }
`;
const TitleWrapper = styled.div`
  height: 5rem;
  width: min(85vw, 500px);
  padding-top: min(3vw, 10px);
  margin: auto;
  display: flex;
  align-items: center;

  > a {
    color: #fff;
    padding: 20px;
    margin-top: -10px;
  }

  > h4 {
    color: #fff;
  }
`;

const AddRelative: FC = () => {
  return (
    <>
      <TitleWrapper className={strings.bgPrimary}>
        <a href="/dashboard" className={strings.textLeft}>
          <img src={arrowLeft} alt="" />
        </a>
        <Title className={strings.textCenter} level={4}>
          Add Child
        </Title>
      </TitleWrapper>
      <Wrapper>
        <Title level={4}>THIRD PARTY REFERENCE</Title>
        <RelativeForm />
      </Wrapper>
    </>
  );
};

export default AddRelative;

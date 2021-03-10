import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { strings } from '../../../shared/constants';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(10vw, 70px);
  margin: 1em auto;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  > button {
    height: 40px;
  }
`;

const Terms: FC = () => {
  return (
    <Wrapper>
      <Title className={strings.textLeft} level={3}>
        Terms of Service
      </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem amet,
        pretium mauris. Consequat mollis interdum eget condimentum faucibus
        viverra ullamcorper molestie. Maecenas nec odio metus bibendum massa
        etiam hendrerit urna duis. Blandit molestie adipiscing ipsum fringilla
        cursus augue lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem amet,
        pretium mauris. Consequat mollis interdum eget condimentum faucibus
        viverra ullamcorper molestie. Maecenas nec odio metus bibendum massa
        etiam hendrerit urna duis. Blandit molestie adipiscing ipsum fringilla
        cursus augue lacus.
      </p>
      <Title className={strings.textLeft} level={3}>
        Authorized Users
      </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem amet,
        pretium mauris. Consequat mollis interdum eget condimentum faucibus
        viverra ullamcorper molestie. Maecenas nec odio metus bibendum massa
        etiam hendrerit urna duis. Blandit molestie adipiscing ipsum fringilla
        cursus augue lacus.
      </p>
      <ButtonWrapper>
        <Button className={strings.bgPrimary} type="primary" block>
          I Agree
        </Button>
        <Button
          className={strings.textPrimary + ' ' + strings.ml4}
          block
          type="ghost"
        >
          I Decline
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Terms;

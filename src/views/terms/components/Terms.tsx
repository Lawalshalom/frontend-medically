import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { strings, classes } from '../../../shared/constants';

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
      <Title className={classes.textLeft} level={3}>
        Terms of Service
      </Title>
      <p>{strings.lorem}</p>
      <p>{strings.lorem}</p>

      <Title className={classes.textLeft} level={3}>
        Authorized Users
      </Title>
      <p>{strings.lorem}</p>

      <ButtonWrapper>
        <Button className={classes.bgPrimary} type="primary" block>
          I Agree
        </Button>
        <Button
          className={classes.textPrimary + ' ' + classes.ml4}
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

import React, { FC, useState } from 'react';
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
  const [showButton, setShowButton] = useState(true);
  return (
    <Wrapper>
      <Title className={strings.textLeft} level={3}>
        Terms of Service
      </Title>
      <p>{strings.lorem}</p>
      <p>{strings.lorem}</p>

      <Title className={strings.textLeft} level={3}>
        Authorized Users
      </Title>
      <p>{strings.lorem}</p>

      {showButton && (
        <ButtonWrapper>
          <Button
            className={strings.bgPrimary}
            type="primary"
            block
            onClick={() => setShowButton(false)}
          >
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
      )}
    </Wrapper>
  );
};

export default Terms;

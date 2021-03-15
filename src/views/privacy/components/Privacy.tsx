import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';

import { strings } from '../../../shared/constants';
const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(10vw, 50px);
  margin: 1em auto;
`;

const ButtonWrapper = styled.div`
  button {
    height: 40px;
    border-radius: 10px 10px 0px 10px;
  }
`;

const Login: FC = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <Wrapper>
      <Title className={strings.textLeft} level={3}>
        Privacy Policy
      </Title>
      <p>{strings.lorem}</p>
      <p>{strings.lorem}</p>
      <p>{strings.lorem}</p>

      {showButton && (
        <ButtonWrapper>
          <Button
            onClick={() => setShowButton(false)}
            className={strings.bgPrimary + ' ' + strings.mt4}
            type="primary"
            block
          >
            Agree
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default Login;

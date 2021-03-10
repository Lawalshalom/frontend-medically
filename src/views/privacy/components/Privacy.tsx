import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(10vw, 70px);
  margin: 1em auto;
`;

const ButtonWrapper = styled.div`
  button {
    height: 40px;
    border-radius: 10px 10px 0px 10px;
  }
`;

const Login: FC = () => {
  return (
    <Wrapper>
      <Title className="text-left" level={3}>
        Privacy Policy
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem amet,
        pretium mauris. Consequat mollis interdum eget condimentum faucibus
        viverra ullamcorper molestie. Maecenas nec odio metus bibendum massa
        etiam hendrerit urna duis. Blandit molestie adipiscing ipsum fringilla
        cursus augue lacus.
      </p>
      <ButtonWrapper>
        <Button className="bg-primary mt-4" type="primary" block>
          Agree
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Login;

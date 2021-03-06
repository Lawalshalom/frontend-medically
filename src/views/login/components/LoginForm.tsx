import React, { FC } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Form = styled.form`
  button, input{
    height: 50px;
  }
`;

const FormGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin-bottom: 1.5em;

  > input {
    background-color: var(--primary-tint);
    border: 1px solid var(--primary-tint);
    height: 50px
  }
`;

const IconWrapper = styled.div`
  display: inline-grid;
  place-items: center;
  background: var(--lightgrey);
  height: 50px;
  border-radius: 5px 0 0 5px;
`;

const LoginForm: FC = () => {
  return (
    <Form>
      <FormGroupWrapper>
        <IconWrapper>
          <MailOutlined />
        </IconWrapper>
        <Input placeholder="Email" />
      </FormGroupWrapper>
      <FormGroupWrapper>
        <IconWrapper>
          <KeyOutlined />
        </IconWrapper>
        <Input placeholder="Password" type="password" />
      </FormGroupWrapper>
      <Button className="bg-primary" type="primary" block>Login</Button>

      <div className="text-center mt-4">
        Forgot Password? <Link to="/register">Click Here</Link>
      </div>

      <div className="text-center mt-2">
        <Link to="/register">Create an Account</Link>
      </div>
    </Form>
  );
}

export default LoginForm;

import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { Input, Button, message } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import FullScreenLoadingIndicator from '../../../shared/components/FullScreenLoadingIndicator';
import fireServiceInstance from '../../../context/services/firebase.service';
import { StoreContext } from '../../../context';
import { classes } from '../../../shared/constants';
import { IFirebaseUserCredentials } from '../../../interfaces/FirebaseUserCredentials';

const Form = styled.form`
  button,
  input {
    height: 50px;
  }
`;

const FormGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin-bottom: 1.5em;

  input {
    background-color: var(--primary-tint);
    border: 1px solid var(--primary-tint);
    height: 50px;
    font-size: 16px;
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
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const store = useContext(StoreContext);
  const history = useHistory();

  const validCredentials = email.length > 5 && password.length > 5;

  const toggleLoader = () => setIsLoading(prev => !prev);

  const submit = async () => {
    try {
      toggleLoader();
      const { user } = await fireServiceInstance.loginWithEmailAndPassword(
        email,
        password
      );
      const token = await user?.getIdToken();
      if (!user) {
        return;
      }
      store.auth.setCurrentUser(user as IFirebaseUserCredentials);
      store.auth.setToken(token || '');

      message.success('Login Successful, Redirecting to Dashboard');
      setTimeout(() => history.push('/dashboard'), 1000);
    } catch (error) {
      message.error(error.message);
    } finally {
      toggleLoader();
    }
  };

  return (
    <Form>
      <FormGroupWrapper>
        <IconWrapper>
          <MailOutlined />
        </IconWrapper>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </FormGroupWrapper>
      <FormGroupWrapper>
        <IconWrapper>
          <KeyOutlined />
        </IconWrapper>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
      </FormGroupWrapper>
      <Button
        className={
          validCredentials ? classes.bgPrimary + ' ' + classes.textWhite : ''
        }
        type="primary"
        block
        onClick={submit}
        disabled={!validCredentials}
      >
        Login
      </Button>

      <div className={classes.textCenter + ' ' + classes.mt4}>
        Forgot Password? <Link to="/register">Click Here</Link>
      </div>

      <div className={classes.textCenter + ' ' + classes.mt2}>
        <Link to="/register">Create an Account</Link>
      </div>

      {isLoading && <FullScreenLoadingIndicator />}
    </Form>
  );
};

export default LoginForm;

import { FC, useState, useContext } from 'react';
import styled from 'styled-components';
import { Input, Button, message } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { StoreContext } from '../../../context';
import PasswordRequirements from './PasswordRequirements';
import FullScreenLoadingIndicator from '../../../shared/components/FullScreenLoadingIndicator';
import fireServiceInstance from '../../../context/services/firebase.service';
import { IFirebaseUserCredentials } from '../../../interfaces/FirebaseUserCredentials';

const Form = styled.form`
  button,
  input {
    height: 50px;
  }

  button:not[disabled] {
    background: var(--primary-color);
    color: #fff;
  }
`;

const FormGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin-bottom: 1.5em;

  input {
    background-color: var(--primary-tint);
    font-size: 16px;
  }

  .ant-input-affix-wrapper {
    padding: 0 11px;
    background-color: var(--primary-tint);

    > input {
      background-color: transparent;
    }
  }

  input,
  .ant-input-affix-wrapper {
    border: 1px solid var(--primary-tint);
    height: 50px;
  }
`;

const IconWrapper = styled.div`
  display: inline-grid;
  place-items: center;
  background: var(--lightgrey);
  height: 50px;
  border-radius: 5px 0 0 5px;
`;

interface RegisterationForm {
  email: string;
  password: string;
  confirm_password: string;
}

const RegistrationForm: FC = (): JSX.Element => {
  const initialFormValues: RegisterationForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  const [formValue, setFormValue] = useState<RegisterationForm>(
    initialFormValues
  );
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const store = useContext(StoreContext);
  const history = useHistory();

  const updateValues = (fieldName: string, value: any) => {
    setFormValue(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const toggleLoader = () => setIsLoading(prevState => !prevState);

  const submitForm = async () => {
    try {
      toggleLoader();
      const { email, password } = formValue;
      const { user } = await fireServiceInstance.signUpWithEmailAndPassword(
        email,
        password
      );

      const token = await user?.getIdToken();

      store.auth.setCurrentUser(user as IFirebaseUserCredentials);
      store.auth.setToken(token || '');

      message.success('Account Created Successfully');
      setTimeout(() => history.push('/dashboard'), 1000);
    } catch (error) {
      message.error(error.message);
    } finally {
      toggleLoader();
    }
  };

  const strongPassword =
    formValue.password.length > 7 &&
    formValue.password.match(/[a-z]/g) &&
    formValue.password.match(/[A-Z]/g) &&
    formValue.password.match(/\d/);
  const passwordsMatch = formValue.password === formValue.confirm_password;
  const validEmail = formValue.email.length > 5;

  return (
    <>
      <Form>
        <FormGroupWrapper>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          <Input
            placeholder="Email"
            required
            type="email"
            value={formValue.email}
            onChange={e => updateValues('email', e.target.value)}
          />
        </FormGroupWrapper>

        <FormGroupWrapper>
          <IconWrapper>
            <KeyOutlined />
          </IconWrapper>
          <Input.Password
            placeholder="Password"
            required
            visibilityToggle
            value={formValue.password}
            onChange={e => updateValues('password', e.target.value)}
          />
        </FormGroupWrapper>

        <PasswordRequirements value={formValue.password} />

        <FormGroupWrapper className="mt-3">
          <IconWrapper>
            <KeyOutlined />
          </IconWrapper>
          <Input.Password
            placeholder="Confirm Password"
            required
            visibilityToggle
            value={formValue.confirm_password}
            onChange={e => updateValues('confirm_password', e.target.value)}
          />
        </FormGroupWrapper>

        <Button
          disabled={!strongPassword || !passwordsMatch || !validEmail}
          type="primary"
          block
          onClick={submitForm}
        >
          Continue
        </Button>

        <div className="text_center mt-4">
          Have an account? <Link to="/login">Login</Link>
        </div>

        <div className="text_center mt-4 text-bolder">
          <Link to="/login">Register as a Doctor</Link>
        </div>
      </Form>

      {isLoading && <FullScreenLoadingIndicator />}
    </>
  );
};

export default RegistrationForm;

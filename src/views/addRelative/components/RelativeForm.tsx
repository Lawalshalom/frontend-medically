import React from 'react';

import styled from 'styled-components';

import { Typography } from 'antd';

import { Input, Checkbox, Button } from 'antd';
import { strings } from '../../../shared/constants';

const { Text } = Typography;

const Container = styled.div`
  margin-top: 30px;
`;
const Form = styled.form`
  margin-top: 20px;

  input,
  textarea {
    background-color: var(--primary-tint);
    font-size: 16px;
    border: 1px solid var(--primary-tint);
    height: 50px;
    margin: 20px;
  }

  textarea {
    height: 100px;
    width: 100%;
  }

  button {
    height: 50px;
  }
  strong {
    color: #fff;
  }
`;

const FormGroup = styled.div`
  display: flex;
`;
const RelativeForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Input required placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Input required placeholder="Last Name" />
        </FormGroup>
        <FormGroup>
          <Input required placeholder="Email" />
        </FormGroup>
        <Checkbox className={strings.ml4}>
          Would you like an Email response?
        </Checkbox>
        <FormGroup>
          <Input.TextArea
            required
            placeholder="Enter Message"
            showCount
            maxLength={100}
          />
        </FormGroup>
        <Button className="bg-primary" type="primary" block>
          <Text strong>Send Message</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default RelativeForm;

import React, { useState } from 'react';
import styled from 'styled-components';

import { Typography } from 'antd';

import { Input, Checkbox, Button } from 'antd';
import { strings } from '../../../shared/constants';

const { Title, Text } = Typography;

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
const ContactForm: React.FC = () => {
  return (
    <Container>
      <Title level={3}>Contact Form</Title>

      <Form>
        <FormGroup>
          <Input required placeholder="First Name" />
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

export default ContactForm;

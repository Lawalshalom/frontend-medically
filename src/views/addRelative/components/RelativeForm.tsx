import React from 'react';

import styled from 'styled-components';

import { Typography } from 'antd';

import { Input, Button, DatePicker, Radio } from 'antd';
import { strings } from '../../../shared/constants';

const { Title, Text } = Typography;

const Container = styled.div`
  margin-top: 30px;
`;
const Form = styled.form`
  margin-top: 20px;

  input,
  textarea,
  select {
    background-color: var(--primary-tint);
    font-size: 16px;
    border: 1px solid var(--primary-tint);
    height: 50px;
    margin: 20px;
  }

  select {
    width: 100%;

    &:focus {
      outline: none;
    }
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
const RadioDiv = styled.div`
  display: flex;
  flex-direction: column;

  .ant-radio-group-outline {
    display: flex;
    flex-direction: column;
  }
`;
const RelativeForm: React.FC = () => {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <Container>
      <Form>
        <FormGroup className={strings.ml2}>
          <Radio.Group>
            <Radio value="relative">Relative</Radio>
            <Radio value="child" className={strings.ml4}>
              Child
            </Radio>
          </Radio.Group>
        </FormGroup>
        <FormGroup>
          <Input required placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Input required placeholder="Last Name" />
        </FormGroup>
        <FormGroup className={strings.ml4}>
          <DatePicker placeholder="Date of birth" />
        </FormGroup>
        <FormGroup>
          <select>
            <option value="">Genotype (Optional)</option>
            <option value="AA">AA</option>
            <option value="AC">AC</option>
            <option value="AS">AS</option>
            <option value="SS">SS</option>
            <option value="SC">SC</option>
          </select>
        </FormGroup>

        <FormGroup>
          <select>
            <option value="">Blood Group (Optional)</option>
            {bloodGroups.map((group, i) => (
              <option value={group} key={i}>
                {group}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <RadioDiv>
            <Title level={4}>GENDER</Title>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female" className={strings.mt3}>
                Female
              </Radio>
              <Radio value="other" className={strings.mt3}>
                Other
              </Radio>
            </Radio.Group>
          </RadioDiv>
        </FormGroup>
        <Button className="bg_primary mt-4" type="primary" block>
          <Text strong>Send Message</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default RelativeForm;

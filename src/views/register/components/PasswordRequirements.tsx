import styled from 'styled-components';
import { CheckCircleFilled } from '@ant-design/icons';

const ConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  padding: 0.5em 0;
  color: #6c6c6c;
`;

const Text = styled.p`
  margin-bottom: 0;
`;

interface Props {
  value?: string,
  children?: React.ReactNode
}

const PasswordRequirements = ({ value = '' }: Props): JSX.Element => {
  return (
    <>
      <ConditionWrapper className={value?.length >= 8 ? 'text_primary' : ''}>
        <CheckCircleFilled />
        <Text>8 characters minimum</Text>
      </ConditionWrapper>
      <ConditionWrapper className={value?.match(/[A-Z]/g) ? 'text_primary' : ''}>
        <CheckCircleFilled />
        <Text>One uppercase letter</Text>
      </ConditionWrapper>
      <ConditionWrapper className={value?.match(/[a-z]/g) ? 'text_primary' : ''}>
        <CheckCircleFilled />
        <Text>One lowercase letter</Text>
      </ConditionWrapper>
      <ConditionWrapper className={value?.match(/\d/) ? 'text_primary' : ''}>
        <CheckCircleFilled />
        <Text>One or more digits</Text>
      </ConditionWrapper>
    </>
  );
}

export default PasswordRequirements;

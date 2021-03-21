import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Modal,
  Input,
  Select,
  DatePicker,
  Button,
  Radio,
  message,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { StoreContext } from '../../../../../context';
import {
  IRelativeInfo,
  GenderTypes,
} from '../../../../../interfaces/RelativeInfo';
import { IAddRelativeFormProps } from '../types';
import {
  BLOOD_GROUPS,
  GENOTYPES,
  classes,
} from '../../../../../shared/constants';
import { ADD_RELATIVE_FORM_PLACEHOLDERS } from '../constants';

const { Title } = Typography;
const { Option } = Select;

const Wrapper = styled.div`
  width: min(100%, 500px);
  margin: 0.3em auto;

  h4 {
    color: #025897;
  }

  > input,
  select,
  .ant-picker,
  .ant-select-selector,
  .ant-select {
    height: 40px;
    margin-bottom: 1.5em;
    width: 100%;
  }

  input {
    font-size: 16px;
  }

  button {
    height: 40px;
    color: #fff;
  }

  .ant-select-arrow {
    top: 53%;
  }

  .ant-radio-button-checked {
    background: var(--primary-color);
    color: #fff;
  }

  .ant-radio-button-wrapper {
    margin-right: 1em;
  }

  .ant-radio-button-wrapper-checked {
    color: #fff;
    border: var(--primary-color);
  }
`;

const AddRelativeForm = ({
  show,
  close,
  onComplete,
}: IAddRelativeFormProps) => {
  const initialFormState: IRelativeInfo = {
    first_name: '',
    last_name: '',
    genotype: '',
    blood_group: '',
    date_of_birth: '',
    gender: GenderTypes.None,
  };

  const store = useContext(StoreContext);
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const bloodgroupOptions = BLOOD_GROUPS.map((group, index) => (
    <Option value={group} key={index}>
      {group}
    </Option>
  ));
  const genotypeOptions = GENOTYPES.map((type, index) => (
    <Option value={type} key={index}>
      {type}
    </Option>
  ));

  const closeModal = () => {
    // closemOdal clicked
    setFormState(initialFormState);
    if (isSubmittingForm) return;
    close();
  };

  const updateFormState = (fieldName: string, value = '') => {
    if (!value) return;

    setFormState(prevFormState => {
      return {
        ...prevFormState,
        [fieldName]: value,
      };
    });
  };

  const submitData = () => {
    setIsSubmittingForm(true);
    const data: IRelativeInfo = { ...formState };

    setTimeout(() => {
      store.relative.addRelative(data);
      message.success('Relative Added Successfully');
      setIsSubmittingForm(false);
      closeModal();
    }, 2000);
  };

  return (
    <Modal visible={show} footer={null} closable={false}>
      <Wrapper>
        <div className="flex_between mb-3">
          <Title level={4}>Add Relative</Title>
          <CloseOutlined onClick={closeModal} />
        </div>
        <Input
          placeholder={ADD_RELATIVE_FORM_PLACEHOLDERS.FIRST_NAME}
          value={formState.first_name}
          onChange={({ target }) => updateFormState('first_name', target.value)}
        />
        <Input
          placeholder={ADD_RELATIVE_FORM_PLACEHOLDERS.LAST_NAME}
          value={formState.last_name}
          onChange={({ target }) => updateFormState('last_name', target.value)}
        />
        <DatePicker
          placeholder={ADD_RELATIVE_FORM_PLACEHOLDERS.DATE_OF_BIRTH}
          onChange={value => updateFormState('gender', value?.toString())}
        />
        <Select
          placeholder={ADD_RELATIVE_FORM_PLACEHOLDERS.BLOOD_GROUP}
          onChange={value => updateFormState('blood_group', value.toString())}
        >
          {bloodgroupOptions}
        </Select>
        <Select
          placeholder={ADD_RELATIVE_FORM_PLACEHOLDERS.GENOTYPE}
          onChange={value => updateFormState('genotype', value.toString())}
        >
          {genotypeOptions}
        </Select>
        <p>Gender</p>
        <Radio.Group
          defaultValue={GenderTypes.Male}
          value={formState.gender}
          onChange={({ target }) => updateFormState('gender', target.value)}
        >
          <Radio.Button value={GenderTypes.Male}>
            {GenderTypes.Male}
          </Radio.Button>
          <Radio.Button value={GenderTypes.Female}>
            {GenderTypes.Female}
          </Radio.Button>
          <Radio.Button value={GenderTypes.Other}>
            {GenderTypes.Other}
          </Radio.Button>
        </Radio.Group>
        <br />

        <Button
          block={true}
          className={classes.bgPrimary + ' ' + classes.mt4}
          loading={isSubmittingForm}
          onClick={submitData}
        >
          {ADD_RELATIVE_FORM_PLACEHOLDERS.SAVE}
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default AddRelativeForm;

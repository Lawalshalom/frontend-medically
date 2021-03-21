import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ProfileAvatar from './ProfileAvatar';
import { classes, BLOOD_GROUPS, GENOTYPES } from '../../../shared/constants';
import {
  Input,
  Select,
  DatePicker,
  Button,
  Radio,
  message,
  Divider,
} from 'antd';
import { PROFILE_FORM_PLACEHOLDERS, userProfile } from '../constants';
import { StoreContext } from '../../../context';
import { IProfileInfo, GenderTypes } from '../../../interfaces/RelativeInfo';

const { Option } = Select;

const FormGroup = styled.div`
  display: flex;
  margin: 1.5em auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  margin-top: -5.5rem;

  h4 {
    color: #025897;
  }

  .ant-avatar-lg {
    cursor: pointer;
    width: 90px;
    height: 100px;
    border: solid 3px #fff;
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
  as .ant-radio-button-checked {
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

const ContactForm = () => {
  const store = useContext(StoreContext);
  const initialFormState: IProfileInfo = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    genotype: '',
    blood_group: '',
    date_of_birth: '',
    imageSrc: userProfile.avatar,
    uid: store.auth.currentUser?.uid,
    gender: GenderTypes.None,
  };

  const [formState, setFormState] = useState({
    ...initialFormState,
    ...store.auth.currentUser,
  });
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
    const data: IProfileInfo = { ...formState };

    setTimeout(() => {
      store.auth.setCurrentUser(data);
      message.success('Profile Updated successfully');
      setIsSubmittingForm(false);
    }, 2000);
  };

  return (
    <Wrapper>
      <Divider orientation="center">
        <ProfileAvatar />
      </Divider>
      <FormGroup>
        <Input
          placeholder={PROFILE_FORM_PLACEHOLDERS.FIRST_NAME}
          value={formState.first_name}
          onChange={({ target }) => updateFormState('first_name', target.value)}
        />
        <Input
          placeholder={PROFILE_FORM_PLACEHOLDERS.LAST_NAME}
          value={formState.last_name}
          onChange={({ target }) => updateFormState('last_name', target.value)}
        />
      </FormGroup>
      <Input
        placeholder={PROFILE_FORM_PLACEHOLDERS.EMAIL}
        value={formState.email}
        onChange={({ target }) => updateFormState('email', target.value)}
      />
      <Input
        placeholder={PROFILE_FORM_PLACEHOLDERS.PHONE}
        value={formState.phone}
        onChange={({ target }) => updateFormState('phone', target.value)}
      />

      <DatePicker
        placeholder={PROFILE_FORM_PLACEHOLDERS.DATE_OF_BIRTH}
        onChange={value => updateFormState('date_of_birth', value?.toString())}
      />
      <Select
        placeholder={PROFILE_FORM_PLACEHOLDERS.BLOOD_GROUP}
        value={formState.blood_group}
        onChange={value => updateFormState('blood_group', value.toString())}
      >
        {bloodgroupOptions}
      </Select>
      <Select
        placeholder={PROFILE_FORM_PLACEHOLDERS.GENOTYPE}
        value={formState.genotype}
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
        <Radio.Button value={GenderTypes.Male}>{GenderTypes.Male}</Radio.Button>
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
        {PROFILE_FORM_PLACEHOLDERS.SAVE}
      </Button>
    </Wrapper>
  );
};

export default ContactForm;

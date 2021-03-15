import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Typography, Modal, Input, Select, DatePicker, Button, Radio, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { StoreContext } from '../../../../../context';
import { IRelativeInfo, GenderTypes } from '../../../../../interfaces/RelativeInfo';

const { Title } = Typography;
const { Option } = Select;

const Wrapper = styled.div`
  width: min(100%, 500px);
  margin: 0.3em auto;

  h4 {
    color: #025897;
  }

  >input,select, .ant-picker, .ant-select-selector, .ant-select{
    height: 40px;
    margin-bottom: 1.5em;
    width: 100%
  }

  input{
    font-size: 16px
  }

  button{
    height: 40px;
    color: #fff
  }

  .ant-select-arrow{
    top: 53%
  }

  .ant-radio-button-checked{
    background: var(--primary-color);
    color: #fff
  }

  .ant-radio-button-wrapper{
    margin-right: 1em
  }

  .ant-radio-button-wrapper-checked{
    color: #fff;
    border: var(--primary-color);
  }
`;

const BLOOD_GROUPS: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const GENOTYPES: string[] = ['AA', 'AS', 'AC', 'SS'];

interface props {
  show: boolean,
  done: Function,
  close: Function
}

const AddRelativeForm = ({ show, close, done }: props) => {
  const initialFormState: IRelativeInfo = {
    first_name: '',
    last_name: '',
    genotype: '',
    blood_group: '',
    date_of_birth: '',
    gender: GenderTypes.None
  };

  const store = useContext(StoreContext);
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const bloodgroupOptions = BLOOD_GROUPS.map((group, index) => <Option value={group} key={group}>{group}</Option>)
  const genotypeOptions = GENOTYPES.map((type, index) => <Option value={type} key={type}>{type}</Option>)

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
        [fieldName]: value
      }
    })
  }

  const submitData = () => {
    setIsSubmittingForm(true);
    const data: IRelativeInfo = { ...formState }

    setTimeout(() => {
      store.relative.addRelative(data);
      message.success('Relative Added Successfully');
      setIsSubmittingForm(false);
      closeModal()
    }, 2000)
  }

  return (
    <Modal visible={show} footer={null} closable={false}>
      <Wrapper>
        <div className="flex_between mb-3">
          <Title level={4}>Add Relative</Title>
          <CloseOutlined onClick={closeModal} />
        </div>
        <Input placeholder="First Name" value={formState.first_name} onChange={({ target }) => updateFormState('first_name', target.value)} />
        <Input placeholder="Last Name" value={formState.last_name} onChange={({ target }) => updateFormState('last_name', target.value)} />
        <DatePicker placeholder="Date of Birth" onChange={(value) => updateFormState('gender', value?.toString())} />
        <Select placeholder="Blood Group (Optional)" onChange={(value) => updateFormState('blood_group', value.toString())} >
          {bloodgroupOptions}
        </Select>
        <Select placeholder="Genotype (Optional)" onChange={(value) => updateFormState('genotype', value.toString())}>
          {genotypeOptions}
        </Select>
        <p>Gender</p>
        <Radio.Group defaultValue="male" value={formState.gender} onChange={({ target }) => updateFormState('gender', target.value)}>
          <Radio.Button value={GenderTypes.Male}>Male</Radio.Button>
          <Radio.Button value={GenderTypes.Female}>Female</Radio.Button>
          <Radio.Button value={GenderTypes.Other}>Other</Radio.Button>
        </Radio.Group>
        <br />

        <Button block={true} className="bg_primary mt-4" loading={isSubmittingForm} onClick={submitData}>
          Save Relative
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default AddRelativeForm;

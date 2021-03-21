import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import AddRelativeForm from './AddRelativeForm';

const Wrapper = styled.div`
  button {
    height: 60px;
    color: #fff;
  }
`;

const AddRelative = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(prevState => !prevState);

  const onDone = () => {
    toggleForm();
    refreshList();
  };

  const refreshList = () => {
    // refresh the list of relatives
  };

  return (
    <Wrapper>
      <Button
        block={true}
        className="bg_primary text_bolder"
        onClick={toggleForm}
      >
        Add Relative
      </Button>
      <AddRelativeForm show={showForm} onComplete={onDone} close={toggleForm} />
    </Wrapper>
  );
};

export default AddRelative;

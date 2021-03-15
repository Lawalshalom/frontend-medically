import styled from "styled-components";
import { Typography, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import AddRelative from "./AddRelative";
import { useContext } from "react";
import { StoreContext } from "../../../../../context";
import { observer } from "mobx-react-lite"


const { Title, Text } = Typography;


const Wrapper = styled.div`
  width: min(500px, 85%);
  margin: min(100px, 10vw) auto;

  .ant-card, h2{
    margin-bottom: 1.5em;
  }
`;

const ChoosePatient = observer(({ selectPatient }: any) => {
  const store = useContext(StoreContext);

  const relatives = store.relative.allRelatives.map(relative => (
    <Card hoverable onClick={() => selectPatient(relative)}>
      <Avatar size={40} className="bg_primary" icon={<UserOutlined />}></Avatar>
      <Text className="ml-3 text_capitalize">{relative.first_name + ' ' + relative.last_name}</Text>
    </Card>
  ));

  return (
    <Wrapper>
      <Title className="text_center" level={2}>Who is this visit for?</Title>
      <Card hoverable onClick={() => selectPatient('me')}>
        <Avatar size={40} className="bg_primary" icon={<UserOutlined />}></Avatar>
        <Text className="ml-3 text_capitalize">Me</Text>
      </Card>
      {relatives}
      <AddRelative />
    </Wrapper>
  )
})

export default ChoosePatient;

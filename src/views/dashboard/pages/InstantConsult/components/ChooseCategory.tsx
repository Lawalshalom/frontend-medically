import styled from "styled-components";
import { Typography, Card, Row, Col } from 'antd';
import { BsCaretRightFill } from 'react-icons/bs';


const { Title, Text } = Typography;


const Wrapper = styled.div`
  width: min(500px, 85%);
  margin: min(100px, 10vw) auto;

  .ant-card, h2{
    margin-bottom: 2em;
  }
`;

const CATEGORIES = ['physicians', 'dentists', 'psychiatrists'];

const ChooseDoctorsCategory = ({ selectCategory }: any) => {

  const categoriesList = CATEGORIES.map(category => (
    <Card hoverable onClick={() => selectCategory(category)}>
      <Row gutter={10}>
        <Col span={20} className="text_capitalize"><Text>{category}</Text></Col>
        <Col span={4} className="text_right"><BsCaretRightFill /></Col>
      </Row>
    </Card>
  ));

  return (
    <Wrapper>
      <Title className="text_center" level={2}>Which doctor will you like to see?</Title>
      {categoriesList}
    </Wrapper>
  )
}

export default ChooseDoctorsCategory;

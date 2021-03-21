import styled from 'styled-components';
import { Typography, Card, Row, Col } from 'antd';
import { classes } from '../../../../../shared/constants';

const { Title, Text } = Typography;

const CATEGORIES = [
  {
    tag: 'Chat',
    price: 500,
  },
  {
    tag: 'Video',
    price: 1500,
  },
];

const ChooseSubscription = ({ selectSubscription }: any) => {
  // TODO: create interface for the subscription type

  const subscriptionCards = CATEGORIES.map(category => (
    <Col span={12}>
      <Card
        className={classes.bgPrimary}
        onClick={selectSubscription}
        hoverable
      >
        <Title
          className={classes.textCenter + ' ' + classes.textWhite}
          level={3}
        >
          {category.tag}
        </Title>
        <Title
          level={3}
          className={classes.textCenter + ' ' + classes.textWhite}
        >
          &#8358;{category.price}
        </Title>
      </Card>
    </Col>
  ));

  return (
    <Wrapper>
      <Title className="text_center text_primary">
        Pick a subscription plan
      </Title>
      <Row gutter={20}>{subscriptionCards}</Row>
      <p className="text_center">
        <Text>
          Please note that a subscription is valid for only one consultation.
        </Text>
      </p>
    </Wrapper>
  );
};

export default ChooseSubscription;

const Wrapper = styled.div`
  width: min(500px, 85%);
  margin: min(100px, 10vw) auto;

  .ant-card,
  h2 {
    margin-bottom: 2em;
  }
`;

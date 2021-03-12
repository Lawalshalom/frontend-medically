import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { Row, Col, Card } from 'antd';

import instantConsult from '../../../images/quick-access/instant-consult.svg';
import outpatientCare from '../../../images/quick-access/outpatient-care.svg';
import symptoma from '../../../images/quick-access/symptoma.svg';
import { BsCaretRightFill } from 'react-icons/bs';

import { strings } from '../../../shared/constants';

import arrowLeft from '../../../images/arrow-left.png';

const { Title, Text } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(2vw, 50px);
  margin: 0.3em auto;
`;
const TitleWrapper = styled.div`
  height: 5rem;
  width: min(85vw, 500px);
  padding-top: min(3vw, 10px);
  margin: auto;
  display: flex;
  align-items: center;

  > a {
    color: #fff;
    padding: 20px;
    margin-top: -10px;
  }

  > h3 {
    color: #fff;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const ChooseSubscription: FC = () => {
  return (
    <>
      <TitleWrapper className={strings.bgPrimary}>
        <a href="/dashboard" className={strings.textLeft}>
          <img src={arrowLeft} alt="" />
        </a>
        <Title className={strings.textCenter} level={3}>
          Subscription Plan
        </Title>
      </TitleWrapper>
      <Wrapper>
        <TextWrapper>
          <Text strong className={strings.textCenter}>
            Choose a subscription plan
          </Text>
        </TextWrapper>

        <Row className={strings.mt4}>
          <Col span={24}>
            <a href="/choose-subscription">
              <Card hoverable>
                <Row gutter={10} align="middle">
                  <Col span={4}>
                    <Image src={symptoma} alt="" />
                  </Col>
                  <Col span={18}>
                    <h3>Chat</h3>
                    <p>#500</p>
                  </Col>
                  <Col span={2}>
                    <BsCaretRightFill />
                  </Col>
                </Row>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className={strings.mt4}>
          <Col span={24}>
            <a href="/choose-subscription">
              <Card hoverable>
                <Row gutter={10} align="middle">
                  <Col span={4}>
                    <Image src={instantConsult} alt="" />
                  </Col>
                  <Col span={18}>
                    <h3>Chat and Audio</h3>
                    <p>#1,000</p>
                  </Col>
                  <Col span={2}>
                    <BsCaretRightFill />
                  </Col>
                </Row>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className={strings.mt4}>
          <Col span={24}>
            <a href="/choose-subscription">
              <Card hoverable>
                <Row gutter={10} align="middle">
                  <Col span={4}>
                    <Image src={outpatientCare} alt="" />
                  </Col>
                  <Col span={18}>
                    <h3>Chat and Video</h3>
                    <p>#1,500</p>
                  </Col>
                  <Col span={2}>
                    <BsCaretRightFill />
                  </Col>
                </Row>
              </Card>
            </a>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default ChooseSubscription;

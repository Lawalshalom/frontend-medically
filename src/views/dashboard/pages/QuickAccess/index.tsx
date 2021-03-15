import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import { BsCaretRightFill } from 'react-icons/bs';

import instantConsult from '../../../../images/quick-access/instant-consult.svg';
import outpatientCare from '../../../../images/quick-access/outpatient-care.svg';
import symptoma from '../../../../images/quick-access/symptoma.svg';
import blogImage from '../../../../images/quick-access/blog.svg';
import historyImage from '../../../../images/quick-access/history.svg';
import { Link } from 'react-router-dom';
import WelcomeCard from './components/WelcomeCard';

const Wrapper = styled.div`
  padding: min(50px, 10vw);

  .ant-col{
    width: 100%;
  }

  .ant-card-body .ant-row{
    min-height: 217px;

    @media screen and (max-width: 500px){
      min-height: 120px;
      width: 100%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const QuickAccess = () => {
  return (
    <Wrapper>
      <WelcomeCard />
      <Row gutter={20}>
        <Col sm={24} md={8}>
          <Link to="/dashboard/instant-consult">
            <Card hoverable className="mb-3">
              <Row gutter={10} align="middle">
                <Col span={8}>
                  <Image src={instantConsult} alt="" />
                </Col>
                <Col span={14}>
                  <h3 className="text_primary text-capitalize text_bold">Instant access to a doctor</h3>
                  <p>Talk to Certified Doctors</p>
                </Col>
                <Col span={2}>
                  <BsCaretRightFill />
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>

        <Col sm={24} md={8}>
          <Card hoverable className="mb-3">
            <Row gutter={10} align="middle">
              <Col span={8}>
                <Image src={outpatientCare} alt="" />
              </Col>
              <Col span={14}>
                <h3 className="text_primary text-capitalize text_bold">Outpatient Care</h3>
                <p>Follow up with your doctor</p>
              </Col>
              <Col span={2}>
                <BsCaretRightFill />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm={24} md={8}>
          <Card hoverable className="mb-3">
            <Row gutter={10} align="middle">
              <Col span={8}>
                <Image src={symptoma} alt="" />
              </Col>
              <Col span={14}>
                <h3 className="text_primary text-capitalize text_bold">Symptoma</h3>
                <p>Access your symptoms</p>
              </Col>
              <Col span={2}>
                <BsCaretRightFill />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm={24} md={8}>
          <Card hoverable className="mb-3">
            <Row gutter={10} align="middle">
              <Col span={6}>
                <Image src={blogImage} alt="" />
              </Col>
              <Col span={16}>
                <h3 className="text_primary text_center text-capitalize text_bold">Blog</h3>
              </Col>
              <Col span={2}>
                <BsCaretRightFill />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm={24} md={8}>
          <Card hoverable className="mb-3">
            <Row gutter={10} align="middle">
              <Col span={6}>
                <Image src={historyImage} alt="" />
              </Col>
              <Col span={16}>
                <h3 className="text_primary text_center text-capitalize text_bold">My Health History</h3>
              </Col>
              <Col span={2}>
                <BsCaretRightFill />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

    </Wrapper>
  )
}

export default QuickAccess;

import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import instantConsult from '../../../images/quick-access/instant-consult.svg';
import outpatientCare from '../../../images/quick-access/outpatient-care.svg';
import symptoma from '../../../images/quick-access/symptoma.svg';
import { BsCaretRightFill } from 'react-icons/bs'

const Wrapper = styled.div`
  padding: min(50px, 10vw);
`;

const Image = styled.img`
  width: 100%;
`;



const QuickAccess = () => {
  return (
    <Wrapper>
      <Row gutter={20}>
        <Col span={8}>
          <Card hoverable>
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
        </Col>
        <Col span={8}>
          <Card hoverable>
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
        <Col span={8}>
          <Card hoverable>
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

      </Row>
    </Wrapper>
  )
}

export default QuickAccess;

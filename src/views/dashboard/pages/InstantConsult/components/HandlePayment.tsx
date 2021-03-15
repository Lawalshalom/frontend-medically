import { Typography, Modal, Button, Spin, message } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import successImage from '../../../../../images/icon/success.svg';

const { Title } = Typography;

const GridCenterWrapper = styled.div`
  display: grid;
  place-items: center;

  button{
    height: 45px
  }
`;


const HandlePayments = ({ subscription, close }: any): JSX.Element => {
  const [isloadingPayment, setIsLoadingPayment] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPayment(false);
      message.success('Payment Verified Successfully', 2);
    }, 3000);
  })

  const openConsulationChannel = () => {
    // TODO: Process logic to initiate consulatation
    close();
  }

  return (
    <Modal closable={false} footer={null} visible={true} centered={true}>
      {isloadingPayment ? (
        <>
          <br />
          <GridCenterWrapper>
            <Spin />
          </GridCenterWrapper>
          <br />
          <GridCenterWrapper>
            <Title level={3}>Processing Payment</Title>
            <p>Please do not close this page.</p>
          </GridCenterWrapper>
        </>
      )
        :
        (
          <>
            <GridCenterWrapper>
              <Title level={3}>Payment Approved</Title>
            </GridCenterWrapper>
            <br />
            <GridCenterWrapper>
              <img src={successImage} alt="" />
            </GridCenterWrapper>
            <br />
            <GridCenterWrapper>
              <Button className="bg_primary text_white" onClick={openConsulationChannel}>Communicate with Doctor</Button>
            </GridCenterWrapper>
          </>
        )
      }
    </Modal>
  )
}

export default HandlePayments;

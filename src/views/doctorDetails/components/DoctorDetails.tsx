import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { FaDotCircle } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import arrowLeft from '../../../images/arrow-left.png';
import { strings } from '../../../shared/constants';

import { doctorDetails } from '../doctorDetails';

const { Title, Paragraph, Text } = Typography;

const Wrapper = styled.div`
  width: min(85vw, 500px);
  padding-top: min(1vw, 70px);
  margin: 1em auto;
  }
`;

const ButtonWrapper = styled.div`
position: absolute;
bottom: 50px;
width: min(85vw, 500px);
button {
  height: 50px;
  border-radius: 10px 10px 0px 10px;
  strong {
    color: #fff;
  }
`;

const TitleWrapper = styled.div`
  height: 4rem;
  width: min(85vw, 500px);
  margin: auto;
  display: flex;
  align-items: center;

  > a {
    padding-left: 20px;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: -15px 0 0 60px;
    color: grey;
  }
  svg.online {
    color: green;
  }
`;
const Image = styled.img`
  border-radius: 50%;
  width: 80px;
`;

const StarDiv = styled.div`
  display: flex;
  justify-content: center;

  svg {
    color: #25c0ff;
    width: 20px;
  }
`;
const BackgroundWrapper = styled.div`
  margin-top: 30px;

  h4 {
    color: #025897;
  }
`;

const ChooseSubscription: FC = () => {
  const filledStars = Array(doctorDetails.rating).fill(AiFillStar);
  const unfilledStars = Array(5 - doctorDetails.rating).fill(AiOutlineStar);

  return (
    <>
      <TitleWrapper className={strings.bgPrimary}>
        <a href="/dashboard" className={strings.textLeft}>
          <img src={arrowLeft} alt="" />
        </a>
      </TitleWrapper>
      <Wrapper>
        <ImageDiv>
          <Image src={doctorDetails.picture} alt="" />
          <FaDotCircle className={doctorDetails.online ? 'online' : ''} />
          <Title level={5} className={strings.mt3}>
            Dr. {doctorDetails.name}
          </Title>
          <Text>{doctorDetails.location}</Text>
        </ImageDiv>
        <StarDiv>
          {filledStars.map(Star => (
            <Star key={Math.random()} />
          ))}
          {unfilledStars.map(Star => (
            <Star key={Math.random()} />
          ))}
        </StarDiv>

        <BackgroundWrapper>
          <Title level={4}>BACKGROUND</Title>
          <Paragraph>{doctorDetails.background.slice(0, 150)}</Paragraph>
          <Button type="link">Read More</Button>
        </BackgroundWrapper>

        <ButtonWrapper>
          <Button className="bg-primary" type="primary" block>
            <Text strong>Talk to the doctor</Text>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default ChooseSubscription;

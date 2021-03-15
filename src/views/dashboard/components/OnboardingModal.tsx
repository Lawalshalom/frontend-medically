import { Button, Carousel } from 'antd';
import OnboardingItem, { OnboardingItemProps } from './OnboardingItem';
import { MutableRefObject, useRef, useState } from 'react';
import { CarouselRef } from 'antd/lib/carousel';
import slideOne from '../../../images/onboarding/onboardingOne.png';
import slideTwo from '../../../images/onboarding/onboardingTwo.png';
import slideThree from '../../../images/onboarding/onboardingThree.png';

import styled from 'styled-components';


const screenData: OnboardingItemProps[] = [
  {
    title: 'Accessible Healthcare',
    subtitle: 'Affordable, instant, unlimited access to the medical professionals for your minor cases.',
    image: slideOne
  },
  {
    title: 'Outpatient Consults',
    subtitle: 'Continue care and communication with your doctor in the hospital.',
    image: slideTwo
  },
  {
    title: 'Digital Health Assistants',
    subtitle: 'Understand your symptoms combination and the possible causes for free.',
    image: slideThree
  }
]

const Wrapper = styled.div`
  .ant-button{}
`;


const Onboarding = ({ hideOnboardingScreen }: any) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef() as MutableRefObject<CarouselRef>
  const items = screenData.map((item, index) => <OnboardingItem key={index} title={item.title} subtitle={item.subtitle} image={item.image} />)



  const nextSlide = () => {
    console.log(slideIndex);
    if (slideIndex === items.length - 1) {
      return hideOnboardingScreen();
    }

    carouselRef.current.next();
    setSlideIndex(previousIndex => previousIndex + 1);
  };

  return (
    <Wrapper>
      <Carousel ref={carouselRef}>
        {items}
      </Carousel>
      <div className="flex_between">
        <Button onClick={hideOnboardingScreen}>Skip</Button>
        <Button onClick={nextSlide}>Next</Button>
      </div>
    </Wrapper>
  )
}

export default Onboarding;

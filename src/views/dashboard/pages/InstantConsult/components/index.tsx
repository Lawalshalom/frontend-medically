import { Carousel } from 'antd';
import { MutableRefObject, useState, useRef, useEffect } from 'react';
import { CarouselRef } from "antd/lib/carousel";

import ChooseDoctorsCategory from "./ChooseCategory";
import ChoosePatient from "./ChoosePatient";
import ChooseSubscription from './ChooseSubscription';
import HandlePayments from './HandlePayment';

const InstantConsultPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedSubscription, setSelectedSubscription] = useState('');
  const [initiatingPayment, setInitiatingPayment] = useState(false);
  const carouselRef = useRef() as MutableRefObject<CarouselRef>

  useEffect(() => {
    loadRelativesData();
  });

  const loadRelativesData = () => { }// TODO: logic to load relatives data asynchronously

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    carouselRef.current.next();
  };

  const selectPatient = (patient: any) => {
    setSelectedPatient(patient);
    carouselRef.current.next();
  };

  const selectSubscription = (subscription: any) => {
    setSelectedSubscription(subscription);
    // carouselRef.current.next();
    makePayment();
  };

  const makePayment = () => {
    setInitiatingPayment(true);
  }

  const closePaymentModal = () => {
    setInitiatingPayment(false);
  }

  return (
    <>
      <Carousel ref={carouselRef}>
        <ChoosePatient selectPatient={selectPatient} />
        <ChooseDoctorsCategory selectCategory={selectCategory} />
        <ChooseSubscription selectSubscription={selectSubscription} />
      </Carousel>
      {initiatingPayment && <HandlePayments close={closePaymentModal} />}
    </>
  )
}

export default InstantConsultPage;

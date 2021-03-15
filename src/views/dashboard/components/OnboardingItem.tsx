import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

const Wrapper = styled.div`
  color: var(--primary-color);

  img{
    background: lightgrey;
    width: min(70%, 500px);
    margin-bottom: 30px
  }
`;

export interface OnboardingItemProps {
  title: string;
  subtitle: string;
  image: string
}


const OnboardingItem = ({ title, subtitle, image }: OnboardingItemProps): JSX.Element => {
  return (
    <Wrapper className="text_center text_primary">
      <div className="center">
        <img src={image || ''} alt="" />
      </div>
      <Title className="text_primary" level={2}>{title || 'title'}</Title>
      <p className="sub">{subtitle || 'subtitle'}</p>
    </Wrapper>
  )
}

export default OnboardingItem;

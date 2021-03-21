import styled from 'styled-components';
import { Typography } from 'antd';
import { classes } from '../../../shared/constants';

const { Title } = Typography;

const Wrapper = styled.div`
  color: var(--primary-color);

  img {
    background: lightgrey;
    width: min(70%, 500px);
    margin-bottom: 30px;
  }
`;

export interface OnboardingItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const OnboardingItem = ({
  title,
  subtitle,
  image,
}: OnboardingItemProps): JSX.Element => {
  return (
    <Wrapper className={classes.textCenter + ' ' + classes.textPrimary}>
      <div className="center">
        <img src={image || ''} alt="" />
      </div>
      <Title className={classes.textPrimary} level={2}>
        {title || 'title'}
      </Title>
      <p className="sub">{subtitle || 'subtitle'}</p>
    </Wrapper>
  );
};

export default OnboardingItem;

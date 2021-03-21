import { Menu, message } from 'antd';
import { ProfileFilled, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings, IoIosCall } from 'react-icons/io';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { GiHeartPlus } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logo-white.png';
import { LogoutOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { StoreContext } from '../../../context';
import {
  dashboardMenuTitles,
  pathNames,
  toastMessages,
} from '../../../constants';
import { IDashboardLink } from '../types';
import { classes } from '../../../shared/constants';

const DashboardMenu = () => {
  const history = useHistory();
  const { auth } = useContext(StoreContext);
  const links: IDashboardLink[] = [
    {
      title: dashboardMenuTitles.QUICK_ACCESS,
      icon: <GiHeartPlus />,
      link: pathNames.dashboard,
    },
    {
      title: dashboardMenuTitles.HEALTH_HISTORY,
      icon: <HiOutlineDocumentText />,
      link: '',
    },
    {
      title: dashboardMenuTitles.SETTINGS,
      icon: <IoMdSettings />,
      link: '',
    },
    {
      title: dashboardMenuTitles.PROFILE,
      icon: <FaUserCircle />,
      link: pathNames.profile,
    },
    {
      title: dashboardMenuTitles.TERMS_OF_SERVICE,
      icon: <ProfileFilled />,
      link: pathNames.terms,
    },
    {
      title: dashboardMenuTitles.PRIVACY_POLICY,
      icon: <ProfileFilled />,
      link: pathNames.privacy,
    },
    {
      title: dashboardMenuTitles.CONTACT_US,
      icon: <IoIosCall />,
      link: pathNames.contact,
    },
    {
      title: dashboardMenuTitles.ABOUT_US,
      icon: <InfoCircleOutlined />,
      link: pathNames.about,
    },
  ];

  const menuItems = links.map(link => (
    <Menu.Item
      icon={link.icon}
      key={link.title}
      onClick={() => gotoLink(link.link)}
    >
      {link.title}
    </Menu.Item>
  ));

  const gotoLink = (location: string) => {
    if (!location) return;
    history.push(location);
  };

  const logout = () => {
    auth.logout();
    history.push(pathNames.login);
    message.info(toastMessages.LOGOUT_SUCCESS);
  };

  return (
    <Wrapper>
      <Menu theme="dark" className={classes.bgPrimary}>
        <Header>
          <Logo src={logo} />
        </Header>
        {menuItems}
      </Menu>
      <Menu theme="dark" className={classes.bgPrimary}>
        <Menu.Item onClick={logout} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
};

export default DashboardMenu;

const Header = styled.div`
  color: white;
  min-height: 120px;
  padding: 16px;
`;

const Logo = styled.img`
  transform: scale(0.7);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 70px;
  height: 100%;
`;

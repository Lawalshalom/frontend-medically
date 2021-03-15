import { Menu } from 'antd';
import { ProfileFilled, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import logo from '../../../images/logo-white.png';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings, IoIosCall } from 'react-icons/io';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdLocalHospital } from 'react-icons/md';
import { GiHeartPlus } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = styled.div`
  color: white;
  min-height: 120px;
  padding: 16px;
`;

const Logo = styled.img`
  transform: scale(0.7);
`;

const DashboardMenu = () => {
  return (
    <Menu theme="dark" className="bg_primary">
      <Header>
        <Logo src={logo} />
      </Header>
      <Menu.Item icon={<GiHeartPlus />}>
        <Link to="/dashboard">Quick Access</Link>
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDocumentText />}>
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item icon={<MdLocalHospital />}>
        <Link to="/choose-subscription">Instant Consults</Link>
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDocumentText />}>
        <Link to="/history"></Link>Health History
      </Menu.Item>
      <Menu.Item icon={<IoMdSettings />}>
        <Link to="/settings">Settings</Link>{' '}
      </Menu.Item>
      <Menu.Item icon={<FaUserCircle />}>
        <Link to="/profile"> My Profile</Link>
      </Menu.Item>
      <Menu.Item icon={<ProfileFilled />}>
        <Link to="/terms">Terms Of Service</Link>{' '}
      </Menu.Item>
      <Menu.Item icon={<ProfileFilled />}>
        <Link to="/privacy">Privacy Policy</Link>{' '}
      </Menu.Item>
      <Menu.Item icon={<IoIosCall />}>
        <Link to="/contact">Contact Us</Link>{' '}
      </Menu.Item>
      <Menu.Item icon={<InfoCircleOutlined />}>
        <Link to="/about">About Us</Link>{' '}
      </Menu.Item>
    </Menu>
  );
};

export default DashboardMenu;

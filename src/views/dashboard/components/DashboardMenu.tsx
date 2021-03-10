import { Menu } from 'antd';
import { ProfileFilled, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import logo from '../../../images/logo-white.png';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings, IoIosCall } from 'react-icons/io'
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdLocalHospital } from 'react-icons/md'
import { GiHeartPlus } from 'react-icons/gi';

const Header = styled.div`
  color: white;
  min-height: 120px;
  padding: 16px;
`;

const Logo = styled.img`
  transform: scale(0.7)
`;

const DashboardMenu = () => {
  return (
    <Menu
      theme="dark"
      className="bg_primary"
    >
      <Header>
        <Logo src={logo} />
      </Header>
      <Menu.Item icon={<GiHeartPlus />}>
        Quick Access
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDocumentText />}>
        Blog
      </Menu.Item>
      <Menu.Item icon={<MdLocalHospital />}>
        Instant Consults
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDocumentText />}>
        Health History
      </Menu.Item>
      <Menu.Item icon={<IoMdSettings />}>
        Settings
      </Menu.Item>
      <Menu.Item icon={<FaUserCircle />}>
        My Profile
      </Menu.Item>
      <Menu.Item icon={<ProfileFilled />}>
        Terms Of Service
      </Menu.Item>
      <Menu.Item icon={<ProfileFilled />}>
        Privacy Policy
      </Menu.Item>
      <Menu.Item icon={<IoIosCall />}>
        Contact Us
      </Menu.Item>
      <Menu.Item icon={<InfoCircleOutlined />}>
        About Us
      </Menu.Item>
    </Menu>
  );
}

export default DashboardMenu;

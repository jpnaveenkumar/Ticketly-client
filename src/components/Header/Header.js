import React from 'react';
import Style from './Header.module.scss';
import Logo from '../../components/Common/Logo';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const getCustomer = () => {
        return JSON.parse(window.localStorage.getItem('customer'));
    }
    const userLogout = () => {
        window.localStorage.removeItem('customer');
        navigate("/auth");
    }
    const customer = getCustomer();
  return (
    <div className={Style.container}>
        <div className={Style.logoContainer}>
            <Logo imgWidth={50} imgheight={50} fontSize={'16px'} />
        </div>
        <div className={Style.userContainer}>
            <div>{customer.name}</div>
            <div  onClick={()=>userLogout()} className={Style.logoutBtn}><LogoutOutlined/></div>
        </div>
    </div>
  );
};

export default Header;
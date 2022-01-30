import React, {useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const AuthWrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const getCustomer = () => {
        return JSON.parse(window.localStorage.getItem('customer'));
    }
    const getDependencies = () => {
        return [getCustomer()];
    };
    useEffect(()=>{
        const customer = getCustomer();
        const currentPath = location.pathname;
        if(currentPath === "/auth" && customer){
            navigate("/");
        }else if(currentPath !== '/auth' && !customer){
            navigate("/auth");
        }
    }, getDependencies());
    return (
        <div>
            { props.needAuth ? getCustomer() && props.children : props.children}
        </div>
    );
};

export default AuthWrapper;
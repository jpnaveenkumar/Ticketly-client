import React from 'react';
import styles from './SignupLoginHolder.module.scss';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Signup from './Signup';
import Login from './Login';

const SignupLoginHolder = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className={styles.container}>
            <Tabs defaultActiveKey="1" onChange={callback} centered>
                <TabPane tab="Login" key="1">
                    <div className={styles.signUpContainer}>
                        <Login/>
                    </div>
                </TabPane>
                <TabPane tab="Signup" key="2">
                    <div className={styles.signUpContainer}>
                        <Signup/>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default SignupLoginHolder
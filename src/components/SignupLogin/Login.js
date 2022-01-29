import React from 'react';
import { Form, Input, Button, Checkbox, Select, notification } from 'antd';

const Login = () => {

    var md5 = require('md5');

    const openNotification = (message, description) => {
        const args = {
            message: message,
            description: description,
        };
        notification.open(args);
    };

    const onFinish = (values: any) => {
        const request = {...values};
        request.password = md5(request.password);
        console.log('Success:', request);

        fetch('http://localhost:8080/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
        .then(response => response.json())
        .then(data => {
            if(data.httpStatus !== 'OK'){
                openNotification(data.httpStatus, data.message);
            }else{
                openNotification("Login success!","");
                window.localStorage.setItem("customer", JSON.stringify(data));
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        openNotification("Signup failed", "Invalid signup form details");
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
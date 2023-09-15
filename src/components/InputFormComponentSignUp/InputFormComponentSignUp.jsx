import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { ButtonComponentLogin } from './style';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const InputFormComponentSignUp = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}
        >
            <Input placeholder="abc@gmail.com" style={{ width: 300 }} />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password placeholder="Password" style={{ width: 300 }} />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
            ]}
        >
            <Input.Password
                placeholder="Confirm your password"
                style={{ width: 300 }}
            />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
            <ButtonComponentLogin size="large" textBtn="Sign Up" />
        </Form.Item>
    </Form>
);
export default InputFormComponentSignUp;

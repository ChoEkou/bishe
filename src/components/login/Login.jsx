
import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import loginBg from '../../assets/login/1.jpg';
import './Login.scss';
import Header from '../header/Header';

const Login = () => {
  const [isShow, setIsShow] = useState(true);

  const handleModalShow = () => {
    setIsShow(true);
  };

  const handleOk = () => {
    setIsShow(false);
  };

  const handleCancel = () => {
    setIsShow(false);
  };

  return (
    <div>
      <div>
        <Header/>
        <span className="loginBtn" onClick={handleModalShow}>登录</span>
        <Modal
          visible={isShow}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose
          className="modalBox"
        >
          <div className="loginBg">
            <img src={loginBg} alt="loginbg" />
          </div>
          <div className="loginBox">
            <h3 className="modalTitle">欢迎登录</h3>
            <Form
              colon={false}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item label="用户名"
                name="userName"
                rules={[
                  { required: true, message: '请输入您的用户名!' }]}
              >
                <Input
                  prefix={<UserOutlined/>}
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item label="密码" name="password" rules={[
                {
                  required: true,
                  message: '请输入您的密码!'
                }
              ]}>
                <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="submitBtn" block>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  )
};

export default Login;

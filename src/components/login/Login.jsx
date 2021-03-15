import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import loginImg from '../../assets/login/login.jpg';
import loginUser from '../../assets/login/user.jpg';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const onFinish = (values) => {
    if((values.username == '2017001' && values.password == '2017001' ) || (values.username == '2017002' && values.password == '2017002' ) ) {
      history.push('/user/talk');
    }else if((values.username == 'admin1' && values.password == 'admin1' ) || (values.username == 'admin2' && values.password == 'admin2' )) {
      history.push('/admin');
    }else{
      message.info("用户不存在！")
    }
  };

  return (
    <div>
      <div className="loginBox">
        <Link to="/" className="toApp">返回首页 -></Link>
        <div className="loginContent">
          <div className="loginLeft">
            <img src={loginImg} alt="loginImg"/>
          </div>
          <div className="loginRight">
            <img src={loginUser} alt="loginUser" className="loginUser"/>
            <h2>高校社团学生登录</h2>
            <Form onFinish={onFinish} className="loginForm">
              <Form.Item name="username" rules={[{required: true, message: "请输入您的用户名！"}]}>
                <Input/>
              </Form.Item>
              <Form.Item name="password" rules={[{required: true, message: "请输入您的密码！"}]}>
                <Input.Password/>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" className="loginBtn">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;

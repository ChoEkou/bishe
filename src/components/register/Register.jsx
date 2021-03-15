import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Input, message, Radio } from 'antd';
import { userdata } from '../../data.js';
import './Register.scss';

export default function Register() {
  const history = useHistory();
  const onFinish = (val) => {
      userdata.push(val);
      message.info("恭喜你，注册成功！")
      history.push('/user/talk');
    }
  return (
    <div className="rgtBox">
      <Link className="toApp" to="/">返回首页 -&gt; </Link>
      <h1>高校社团新生注册</h1>
      <Form onFinish={onFinish} className="rgtForm" colon={false} requiredMark={false}>
        <Form.Item label="学号" name="rgtnumber" rules={[{ required: true, message: "请输入学号！" }]}>
          <Input maxLength={7} />
        </Form.Item>
        <Form.Item label="姓名" name="rgtname" rules={[{ required: true, message: "请输入姓名！" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="rgtsex" label="性别">
          <Radio.Group defaultValue="男">
            <Radio value="男">男</Radio>
            <Radio value="女">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="密码" name="rgtpsd" rules={[{ required: true, message: "请输入密码！" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="rgtBtn">注册</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

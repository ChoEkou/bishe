
import React, { useState } from 'react';
import { Button, Result, Form, Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { applyList, result } from '../../../../data.js';
import './Apply.scss';

const Apply = () => {
  const [form] = Form.useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onFinish = (val) => {
    const aa = {...val};
    aa.shenhe = false;
    applyList.push(aa);
    console.log(result)
    setIsSuccess(true);
  };

  const handleReset = () => {
    form.resetFields();
  }

  const handleShow = () => {
    setIsSuccess(false);
    form.resetFields();
  }

  return (
    <div>
      {!isSuccess ? (
        <Form form={form} className="applyBox" onFinish={onFinish}>
          <Form.Item name="activename" rules={[{ required: true, message: '请输入活动名称' }]}>
            <Input addonBefore="活动名称" />
          </Form.Item>
          <Form.Item name="activewhere" rules={[{ required: true, message: '请输入活动地点' }]}>
            <Input addonBefore="活动地点" />
          </Form.Item>
          <Form.Item name="activetalk" rules={[{ required: true, message: '请输入活动简介' }]}>
            <TextArea placeholder="活动简介" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="subBtn">提交</Button>
            <Button htmlType="reset" onClick={handleReset}>重置</Button>
          </Form.Item>
        </Form>)
        :
        <Result
          icon={<SmileOutlined />}
          title="Great, we have done all the operations!"
          extra={<Button type="primary" onClick={handleShow}>Next</Button>}
        />
      }
    </div>
  )
}

export default Apply;

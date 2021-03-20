import React, { useState } from 'react'
import { Table, Tag, Space, Rate } from 'antd';

export default function Members() {
  const [score, setScore] = useState(3)
  const handleScore = (value) => {
    setScore(value);
  }
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '评分',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Rate value={score} onChange={handleScore} /> 
          <span style={{fontSize: '20px', color: '#ccc'}}> {score + '.0'}</span>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '四川成都',
      tags: ['积极', '团结'],
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      address: '四川乐山',
      tags: ['热情'],
    },
    {
      key: '3',
      name: '王红',
      age: 32,
      address: '四川广元',
      tags: ['乐观', '奋斗'],
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

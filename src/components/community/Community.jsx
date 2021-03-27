import React from 'react'
import Header from '../header/Header';
import shetuan from '../../assets/common/shetuan.jpg';
import './Community.scss';

export default function Community() {
  const mainType = [
    {
      title: '计算机协会',
      content: '计算机协会是一个涉及面广,多方面发展的学生社团,包括计算机硬件,软件,网络,科研,电脑组装与维修,以及计算机知识培训等全方面服务于广大学生.'
    },
    {
      title: '手工制作协会',
      content: '暂无简介'
    },
    {
      title: '新闻协会',
      content: '主要是报道这些活动内容，撰写新闻稿等等。很多学校的新闻社也会去做一些义工活动，比较有意义。'
    },
    {
      title: '篮球协会',
      content: '大多数男孩子会选择的社团，可以遇到很多朋友，一起切磋球技，会进步的非常快的。'
    },
    {
      title: '舞蹈协会',
      content: '喜欢跳舞的同学们可以选择参加这类社团集体舞，街舞。舞蹈社团里还会教你交谊舞、集体舞、街舞等。'
    },
    {
      title: '书法协会',
      content: '更多'
    }
  ];

  return (
    <div>
      <Header/>
      <div className="communityBanner">
        <img src={shetuan} alt="shetuan"/>
      </div>
      <div className="comMain">
        {mainType.map((item,idx) => {
          return <div className="typeBox" key={idx}>
          <div className="title">{item.title}</div>
          <div className="content">{item.content}</div>
          <span className="xiangxi">详细信息 &gt;</span>
        </div>
        })}
      </div>
    </div>
  )
}

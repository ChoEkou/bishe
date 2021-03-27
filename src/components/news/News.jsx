import React from 'react';
import Header from '../header/Header';
import xinwen from '../../assets/common/xinwen.jpg';
import aa from '../../assets/news/1.jpg';
import bb from '../../assets/news/2.jpg';
import cc from '../../assets/news/3.jpg';
import dd from '../../assets/news/4.jpg';
import ee from '../../assets/news/5.jpg';
import ff from '../../assets/news/6.jpg';
import './News.scss';

const newTitle = "魅力社团 激扬青春 多姿校园 展我风采——学校社团展示活动掠影";
const newPs = [
  '为进一步丰富学生的校园文化生活，筑牢师生展示才艺的舞台，学校团委于10月11日下午在行知广场，组织学校21个学生社团，开展了丰富多彩的社团活动展演。',
  '我们的社团，既有和同学们专业技能相关的专业社团，如3D打印社、线切割、电气DIY社、电子商务社、美工社、舞蹈社、数码维修社、美食小当家等，这些社团可以让同学们学以致用，学习到扎实的专业技能；也有搏击术、书法社、足球社、书法社、吉他社、动漫社等让师生展现各自才艺的社团。',
  '展演时，各个社团可谓是“各显神通”，通过作品展示、现场表演等方式，充分展现出了各自社团的特色，一时间，校园欢歌笑语、精彩不断、热闹非凡。',
  '社团活动既为同学们提供了一个放松大脑，放飞心情的空间，也为师生提供了一个施展才华的舞台，这些活动丰富了校园文化生活，营造了浓厚的校园氛围。能文能舞，亦动亦静，既培养了学生的兴趣爱好，丰富了学生的精神生活，为学生张扬个性提供了广阔的舞台，又增进了师生之间的感情。',
  '魅力社团，活力校园！'
];

const newImgs = [
  {
    img: <img src={aa} alt="a" />,
    text: '3D打印社，打印机妙趣横生'
  },
  {
    img: <img src={bb} alt="a" />,
    text: ''
  },
  {
    img: <img src={cc} alt="a" />,
    text: '搏击社，虎虎生风'
  },
  {
    img: <img src={dd} alt="a" />,
    text: '晨景广播室，我们的节目我主持'
  },
  {
    img: <img src={ee} alt="a" />,
    text: '电气DIY社，小机器人会跳舞'
  },
  {
    img: <img src={ff} alt="a" />,
    text: '电子商务社'
  },

];


export default function News() {
  return (
    <div>
      <Header/>
      <div className="newsBanner">
        <img src={xinwen} alt="xinwen"/>
      </div>
      <div className="newTitle">{newTitle}</div>
      <div className="dateTag">
        <div className="tag">2017-10-20</div>
        <div className="count">浏览次数：<span>2089</span></div>
      </div>
      <div className="newPs">
        {newPs.map((item) => {
          return <span>{item}</span>
        })}
      </div>
      <div className="newImgs">
        {newImgs.map((item) => {
          return (<div>
            {item.img}
            <p>{item.text}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

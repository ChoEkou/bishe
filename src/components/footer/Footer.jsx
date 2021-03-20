import React from 'react';
import footerLogo from '../../assets/footer/footerLeft.jpg';
import './Footer.scss';

const Footer = () => {
  const footerArray = [
    ['关于我们', '关于我们', '联系我们', '加入我们'],
    ['社团', '社团风采', '社团成员', '社团活动'],
    ['新闻', '关于我们', '新闻', '新闻头条'],
    ['帮助', '关于我们', '联系我们', '人力头条']
  ];

  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-left">
          <img src={footerLogo} alt="" width="100%"/>
        </div>
        <div className="footer-right">
          {footerArray.map((item, index) => {
            return <div className="footer-content" key={index}>
              {item.map((it, idx) => {
                return <div className="aa" key={idx}>{it}</div>
              })}
            </div>

          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
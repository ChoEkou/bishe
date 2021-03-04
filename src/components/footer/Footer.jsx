import React from 'react';
import footerLogo from '../../assets/footer/footerLeft.jpg';
import './Footer.scss';

const Footer = () => {
  const footerArray = [
    ['关于我们', '关于我们', '联系我们', '人力头条'],
    ['找工作', '关于我们', '联系我们', '人力头条'],
    ['找人才', '关于我们', '联系我们', '人力头条'],
    ['帮助', '关于我们', '联系我们', '人力头条']
  ];

  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-left">
          <img src={footerLogo} alt="" />
        </div>
        <div className="footer-right">
          {footerArray.map((item, index) => {
            return <div className="footer-content">
              {item.map((it, idx) => {
                return <div className="aa">{it}</div>
              })}
            </div>

          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
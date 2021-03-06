import React from 'react';
import './FooterCopy.scss';

const FooterCopy = () => {
  const copyICP = [
    'ICP经营许可证编号',
    '京ICP证060405号',
    '京ICP备10012705号-12',
    '京公网安备11010502042743号',
    '违法信息举报：举报：jubao@chinahr.com'
  ];

  return (
    <div className="footerCopy">
      <div className="c-top">
        {copyICP.map((item, index) => {
          return <span key={index}>{item}</span>
        })}
      </div>
      <div className="c-center">
        Copyright 北京五八信息技术有限公司 版权所有
      </div>
      <div className="c-bottom"></div>
    </div>
  )
};

export default FooterCopy;
import React from 'react';
import Login from './../login/Login';
import './Header.scss';

const Header = () => {
    const nav = ['首页', '|', '校园招聘', '|', '社会招聘', '|', '实习生招聘', '|', '个人中心'];
    return (
        <div className='headerBox'>
            <div className="container">
                <div className="left">
                    社团招聘网站
                </div>
                <div className="center">
                    {nav.map((nav, index) => {
                        return <a href="#" className='navItem' key={index}>{nav}</a>
                    })}
                </div>
                <div className="right">
                    <Login />
                    <span>|</span>
                    <a href="#">注册</a>
                </div>
            </div>
        </div>
    )
};

export default Header;
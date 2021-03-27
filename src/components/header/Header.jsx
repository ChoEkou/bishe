import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import team from '../../assets/common/team.jpg';
import './Header.scss';

const Header = () => {
    const nav = ['社团', '活动',  '新闻', '制度', '登录', '新生注册'];
    const history = useHistory();
    
    const handleLink = (index) => {
        if(index === 0) {
            history.push('/community');
        }else if(index === 1){
            history.push('/active');
        }else if(index === 2){
            history.push('/news');
        }else if(index === 3){
            history.push('/rules');
        }else if(index === 4){
            history.push('/login');
        }else {
            history.push('/register');
        }
            
    };

    return (
        <div className='headerBox'>
            <div className="container">
                <div className="left">
                    <Link to='/'>
                      我的社团
                    </Link>
                </div>
                <div className="center">
                    {nav.map((nav, index) => {
                        return <span onClick={()=>handleLink(index)} className='navItem' key={index}>{nav}</span>
                    })}
                </div>
            </div>
        </div>
    )
};

export default Header;
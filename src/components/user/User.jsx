import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Apply from './components/apply/Apply';
import Talk from './components/talk/Talk';
import AppHistory from './components/apphistory/AppHistory';

import './User.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const User = () => {
  return (
    <div className="userBox">
      <Layout>
        <Header className="header">
          <h3>校园社团系统学生端</h3>
          <div className="headerRight">
            <span>Me &nbsp;</span>
            <Link to="/">首页</Link>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="我的桌面">
                <Menu.Item key="1">
                  <Link to="/user/talk">社团公告</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="社团申请">
                <Menu.Item key="5">
                  <Link to='/user/apply'>活动申请</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to='/user/apphistory'>申请历史</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="个人设置">
                <Menu.Item key="9">个人信息</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', backgroundColor: '#fff' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/user/talk" exact component={Talk}></Route>
                <Route path="/user/apply" exact component={Apply}></Route>
                <Route path="/user/apphistory" exact component={AppHistory}></Route>
                <Redirect to="/user/talk" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default User;

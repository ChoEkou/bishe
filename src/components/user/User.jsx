import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Talk from './components/talk/Talk';
import Apply from './components/apply/Apply';
import routes from '../../route';
import './User.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function User() {
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
                <Menu.Item key="1">社团公告</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="社团申请">
                <Menu.Item key="5">
                  <Link to='/user/apply'>活动申请</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="个人设置">
                <Menu.Item key="9">个人信息</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <switch>
                <Route path="/user/apply" component={Apply}></Route>
                <Route path="/user/talk" component={Talk}></Route>
              </switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

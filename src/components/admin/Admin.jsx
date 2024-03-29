import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import ShenPi from './components/shenpi/ShenPi';
import Gonggao from './components/gonggao/Gonggao';
import Members from './components/members/Members';
import './Admin.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Admin = () => {
  return (
    <div className="userBox">
      <Layout>
        <Header className="header">
          <h3>校园社团系统学生端</h3>
          <div className="headerRight">
            <span>Admin &nbsp;</span>
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
                  <Link to="/admin/gonggao">社团公告</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="社团审批">
                <Menu.Item key="2">
                  <Link to='/admin/shenpi'>待审批</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="成员设置">
                <Menu.Item>
                  <Link to="/admin/members">成员信息</Link>
                </Menu.Item>
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
                <Route path="/admin/shenpi" exact component={ShenPi}></Route>
                <Route path="/admin/gonggao" exact component={Gonggao}></Route>
                <Route path="/admin/members" exact component={Members}></Route>
                <Redirect to='/admin/gonggao' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default Admin;

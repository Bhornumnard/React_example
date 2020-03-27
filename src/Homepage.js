import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Homepage.css'
import { Layout,Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';



export default class Homepage extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div style={{marginTop: "5px"}}>
        
        <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{backgroundColor: "#001529"}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
          <Layout>
            <Header><h1> this is the Homepage</h1>
              <Link to="/resume" style={{color : "black"}}> Resume page </Link>
              <Link to="/app" style={{color : "black"}}> App</Link>
              <Link to="/fackbook" style={{color : "black"}}> fackbook page</Link>
              <Link to="/" style={{color : "black"}}> Homepage </Link></Header>
              <Button type="primary" id="button">Primary</Button>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

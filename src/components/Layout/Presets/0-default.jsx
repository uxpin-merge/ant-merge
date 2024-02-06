import * as React from 'react';
import Layout from '../Layout';
import Sider from '../Sider/Sider';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

export default (
  <Layout uxpId="layout-1" hasSider={true}>
    <Sider width="25%" style={{ backgroundColor: '#1677ff', color: '#ffffff' }} uxpId="sider-1">
      Sider
    </Sider>
    <Layout uxpId="layout-2">
      <Header style={{ backgroundColor: '#4096ff', color: '#ffffff' }} uxpId="header-1" >Header</Header>
      <Content style={{ backgroundColor: '#0958d9', color: '#ffffff' }} uxpId="content-1">Content</Content>
      <Footer style={{ backgroundColor: '#4096ff', color: '#ffffff' }} uxpId="footer-1">Footer</Footer>
    </Layout>
  </Layout>
);

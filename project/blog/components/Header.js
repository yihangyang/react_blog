import React, {  } from 'react';
import '../styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import { DingtalkOutlined, BarChartOutlined, TeamOutlined } from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={15} lg={15} xl={12}>
        <span className="header-logo">Blog</span>
        <span className="header-text">sample text</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <DingtalkOutlined />
            Home
          </Menu.Item>

          <Menu.Item key="video">
            <BarChartOutlined />
            Video
          </Menu.Item>

          <Menu.Item key="life">
            <TeamOutlined />
            Life
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header
import React, { useState, useEffect } from 'react';
import '../styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import { DingtalkOutlined, BarChartOutlined, TeamOutlined } from '@ant-design/icons';
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData =  async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if(e.key == 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Blog</span>
          <span className="header-text">sample text</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={9} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <DingtalkOutlined />
              Home
            </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    <BarChartOutlined />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
            

            <Menu.Item key="life">
              <TeamOutlined />
              Life
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
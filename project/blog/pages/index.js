import React, { useState } from 'react';
import Head from 'next/head'
import { Row, Col, List } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Ad from '../components/Ad'
import Footer from '../components/Footer'
import { CalendarOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/pages/index.css'

function Home() {

  const [mylist, setMylist] = useState(
    [
      {title:"first", context:"this is first context"},
      {title:"second", context:"this is second context"},
      {title:"third", context:"this is third context"},
      {title:"fourth", context:"this is fourth context"},
    ]
  )

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header = {<div>Post</div>}
            itemLayout = "vertical"
            dataSource= {mylist}
            renderItem={item=>(
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined /> 2019-07-08</span>
                  <span><FolderOutlined /> Video</span>
                  <span><UserOutlined /> 200</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default Home
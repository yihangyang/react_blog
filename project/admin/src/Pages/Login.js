import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Card, Input, Button, Spin, message } from 'antd'
import { CalendarOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';

import '../static/css/login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

function Login (props) {

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin=() => {
    setIsLoading(true)
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 1000);
    if(!userName) {
      message.error("username is null")
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      return false
    } else if(!password) {
      message.error("password is null")
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      return false
    }
    let dataProps = {
      'username': userName,
      'password': password
    }

    axios({
      method:'post',
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true,
    }).then(
      res => {
        setIsLoading(false)
        if(res.data.data == 'login successed'){
          localStorage.setItem('openId', res.data.openId)
          props.history.push('/index')
        } else {
          message.error('Account or password is incorrect')
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        }
      }
    )

  }

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="Blog System" bordered={true} style={{width: 400}}>
          <Input
            id="username"
            size="large"
            placeholder="Enter your username"
            prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25'}}/>}
            onChange= {(e) => {setUsername(e.target.value)}}
          />
          <br /><br />

          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<KeyOutlined style={{color: 'rgba(0,0,0,.25'}}/>}
            onChange= {(e) => {setPassword(e.target.value)}}
          />
          <br /><br />

          <Button type="primary" size="large" block onClick={checkLogin}>Login</Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login
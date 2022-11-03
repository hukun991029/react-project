import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './css/login.module.css'
const Login: React.FC = () => {
  const navigate = useNavigate()
  const toMain = () => {
    navigate('/home', { replace: true })
  }
  return (
    <Row justify="center">
      <Col span={12}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className={style.loginBtn} onClick={toMain}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login

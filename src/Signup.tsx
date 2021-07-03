import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Card, Layout, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import useToken from "./useToken";

export default function Signup() {
  const { userJwt, setUserJwt } = useToken();

  const history = useHistory();

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const { Header } = Layout;
  const { Title } = Typography;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleInputEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailValue(event.target.value);
  };

  const handleInputPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValue(event.target.value);
  };

  const handleSignUp = () => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    axios({
      method: "POST",
      url: "http://localhost:3000/signup",
      data: user,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        const token = response.data.token;
        if (token) {
          setUserJwt(token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userJwt !== null) {
    history.push("/landingpage");
  }

  return (
    <div>
      <Header
        style={{
          width: "100%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Row justify="space-between" align="middle">
          <Title level={2}>
            <Link to="/">Json Web Token</Link>
          </Title>
          <div>
            <Button style={{ marginRight: 20 }} type="primary">
              <Link to="/login">Log In</Link>
            </Button>
            <Button type="primary">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </Row>
      </Header>
      <Row justify="center">
        <Col>
          <Card style={{ width: 1000 }} bordered={false}>
            <Form {...layout} name="  login_form">
              <Form.Item name="email" label="Email">
                <Input
                  allowClear
                  prefix={<UserOutlined />}
                  onChange={handleInputEmailChange}
                  value={emailValue}
                />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input
                  allowClear
                  prefix={<LockOutlined />}
                  onChange={handleInputPasswordChange}
                  value={passwordValue}
                  type="password"
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

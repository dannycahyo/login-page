import React from "react";
import { Image, Typography, Layout, Button, Row } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  const { Header } = Layout;
  const { Title } = Typography;
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
      <Typography.Title style={{ marginTop: 50 }} level={2}>
        Welcome To Home Page
      </Typography.Title>
      <Image.PreviewGroup>
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </Image.PreviewGroup>
    </div>
  );
}

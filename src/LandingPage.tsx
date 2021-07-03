import React from "react";
import { Image, Typography, Layout, Button, Row } from "antd";
import { Link, useHistory } from "react-router-dom";
import useToken from "./useToken";

export default function LandingPage() {
  const { userJwt } = useToken();
  const { Header } = Layout;
  const { Title } = Typography;

  const history = useHistory();

  if (userJwt === null) {
    history.push("/login");
  }

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  };

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
            <Button type="primary" onClick={handleLogOut}>
              <Link to="/">Log Out</Link>
            </Button>
          </div>
        </Row>
      </Header>
      <Typography.Title level={2} style={{ marginTop: 50 }}>
        Welcome To Landing Page
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

import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import LandingPage from "./LandingPage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";

function App() {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer style={{ textAlign: "center", marginTop: 120 }}>
        <Text strong>Simple Login Page ©2021 Created by Danny GG</Text>
      </Footer>
    </div>
  );
}

export default App;

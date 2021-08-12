import React, { VFC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrivateRoute } from "./components";
import { AuthProvider, TaskProvider } from "./context";
import { CreateTaskScreen, DashboardScreen, LoginScreen } from "./screens";
import theme from "./theme";

const App: VFC = () => {
  return (
    <TaskProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <PrivateRoute
                to="/"
                path="/create"
                component={CreateTaskScreen}
              />
              <PrivateRoute
                to="/"
                path="/dashboard"
                component={DashboardScreen}
              />
              <Route path="/" component={LoginScreen} exact={true} />
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </TaskProvider>
  );
};

export default App;

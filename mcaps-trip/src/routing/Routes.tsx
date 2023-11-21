import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Login from "../pages/Login/Login";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <UnauthenticatedTemplate>
          <Redirect to="/login" />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <Home />
        </AuthenticatedTemplate>
      </Route>
      <Route path="/movie/:id">
        <UnauthenticatedTemplate>
          <Redirect to="/login" />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <Movie />
        </AuthenticatedTemplate>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default Routes;

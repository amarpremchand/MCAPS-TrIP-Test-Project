import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Login from "./pages/Login/Login";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
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
          {/* Redirect to /login if no other route matches */}
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;

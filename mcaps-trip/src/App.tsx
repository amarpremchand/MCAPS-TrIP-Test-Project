import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import Routes from "./routing/Routes";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;

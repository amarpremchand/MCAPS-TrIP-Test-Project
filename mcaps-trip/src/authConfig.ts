if (!process.env.REACT_APP_CLIENT_ID || !process.env.REACT_APP_AUTHORITY) {
  throw new Error("Missing environment variable(s) in msalConfig.");
}

export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AUTHORITY}`,
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

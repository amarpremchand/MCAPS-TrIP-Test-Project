export const msalConfig = {
    auth: {
        clientId: '97199de2-7fa0-40bd-83a4-0f8d4aaed22d', 
        authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47', 
        redirectUri: 'http://localhost:3000/'
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false, 
    }
};

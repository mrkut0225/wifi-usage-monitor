import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Amplify設定
const amplifyConfig = {
  API: {
    endpoints: [
      {
        name: "WifiUsageAPI",
        endpoint: "https://x099x3o1wd.execute-api.ap-northeast-1.amazonaws.com/prod"
      }
    ]
  }
};

Amplify.configure(amplifyConfig);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import YourApp from './YourApp'; // Replace with your main app component

const App = () => (
  <AuthProvider>
    <YourApp />
  </AuthProvider>
);

export default App;

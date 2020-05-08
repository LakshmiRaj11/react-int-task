import React from 'react';
import './App.css';
import createRoutes from './routes';
const routes = createRoutes();

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

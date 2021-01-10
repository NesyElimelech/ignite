import React from 'react';
// Router
import { Route } from 'react-router-dom';
// Styles
import GlobalStyle from './styles/GlobalStyles';
// Components and pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

import React from 'react';
// Router
import { Route } from 'react-router-dom';
// Styles
import GlobalStyle from './styles/GlobalStyles';
// Components and pages
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

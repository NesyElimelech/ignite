import React from 'react';
// Styles
import GlobalStyle from './styles/GlobalStyles';
// Components and pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;

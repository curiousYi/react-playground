import React from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext('originalTheme');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      </header>
    </div>
    );
  }
}

export default App;

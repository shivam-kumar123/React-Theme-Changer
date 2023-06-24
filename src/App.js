import {React, useState} from 'react'

import './App.css';
import Button from './components/Button';

function App() {

  // 0 --> white theme
  // 1 --> dark theme
  const [theme, setTheme] = useState(0)

  return (
    <div className={`App ${(theme === 0) ? 'white-theme' : 'dark-theme'}`}>
      <h1>Welcome to the Change Theme Project made by Shivam Kumar</h1>
      {(theme === 0) ? 
        <h2>White Theme</h2> :
        <h2>Black Theme</h2>
      }
      <Button setTheme={setTheme}/>
    </div>
  );
}

export default App;

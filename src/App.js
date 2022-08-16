import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
        <footer>
          This project was coded by Yulia and is {" "}
          <a href="https://github.com" target="_blank" rel="noreferrer noopener">
          open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}



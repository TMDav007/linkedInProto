import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
        <Header />

      {/* App Body */}
      <div className='app__body'>
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

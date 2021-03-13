import React from 'react';
import './App.css';
import Feed from './component/Feed/Feed';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
        <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

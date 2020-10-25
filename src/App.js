import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app"> 
    {/* SideBar */}
    <Sidebar />

    {/* Chat */}
    <Chat />
    </div>
  );
}

export default App;

import React from 'react';
import QuoteMachine from './components/QuoteMachine';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <QuoteMachine />
      </main>
    </div>
  );
}

export default App;
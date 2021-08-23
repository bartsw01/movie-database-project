import React from 'react';
import './App.css';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <h1>Movie Database Project</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="rating">
        <ul className="list">
          <li className="star active">&#9733;</li>
          <li className="star active">&#9733;</li>
          <li className="star active">&#9733;</li>
          <li className="star">&#9734;</li>
          <li className="star">&#9734;</li>
        </ul>
        <span>3 of 5</span>
      </div>
    );
  }
}

export default App;

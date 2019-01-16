import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };

    //This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, target) {
    const li = Array.from(document.querySelectorAll('li'));

    li.forEach((item, index) => {
      if (index + 1 <= target) {
        item.classList.add('active');
        item.innerHTML = '&#9733;';

      } else {
        item.classList.remove('active');
        item.innerHTML = '&#9734;';
      }
    });

    this.setState(() => ({
      rating: target
    }));
  }

  render() {
    return (
      <div className="rating">
        <ul className="list">
          <li className="star" onClick={(event) => this.handleClick(event, 1)}>&#9734;</li>
          <li className="star" onClick={(event) => this.handleClick(event, 2)}>&#9734;</li>
          <li className="star" onClick={(event) => this.handleClick(event, 3)}>&#9734;</li>
          <li className="star" onClick={(event) => this.handleClick(event, 4)}>&#9734;</li>
          <li className="star" onClick={(event) => this.handleClick(event, 5)}>&#9734;</li>
        </ul>
        <span>{this.state.rating} of 5</span>
      </div>
    );
  }
}

export default App;

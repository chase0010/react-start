// src/component/root.jsx
import React from 'react';
import { Link } from 'react-router';

import io from 'socket.io-client'
const socket = io();

class App extends React.Component {

  handleClick(){
    socket.emit('hello','Chase');
  }

  render() {
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lists">Lists</Link></li>
          </ul>
          <button onClick={this.handleClick.bind(this)}>点击</button>
          <div className="detail">
            {this.props.children}
          </div>
        </div>
      );
  }
}

export default App;
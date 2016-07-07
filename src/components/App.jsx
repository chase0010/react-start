// src/component/root.jsx
import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lists">Lists</Link></li>
          </ul>
          <div className="detail">
            {this.props.children}
          </div>
        </div>
      );
  }
}

export default App;
// src/component/root.jsx
import React from 'react';
import { Link } from 'react-router';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

import '../styles/style.less';

import styles from './App.less'

import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

import io from 'socket.io-client';



const socket = io();

class App extends React.Component {

  handleClick(){
    socket.emit('hello','Chase');
  }

  render() {
    return (
        <div className={styles.wechat_layout}>
          <HeaderBar />
          <div className="content">
            {this.props.children}
            <button onClick={this.handleClick.bind(this)}>点击</button>
          </div>
          <Footer />
        </div>
      );
  }
}

export default App;
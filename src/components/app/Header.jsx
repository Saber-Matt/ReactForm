import React, { Component } from 'react';
//import ReactDOM from 'rect-dom';
import Home from './Home.jsx';
import Detail from './Detail.jsx';
import Input from './Input.jsx';

export default class Header extends Component {
  render() {
    return ((
      <Header>
        <Home />
        <Detail />
        <Input />

      </Header>)
      
    );
  }
}

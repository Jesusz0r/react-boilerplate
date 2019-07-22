import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Bye, world!</p>
      </div>
    );
  }
}

export default hot(module)(App);

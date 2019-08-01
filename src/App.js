import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import { defaultAction as loadMessage } from './redux/actions/defaultActions';

class App extends Component {
  componentWillMount() {
    const { loadMessage } = this.props;

    loadMessage();
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <h1>{message.show ? message.message : 'Not a redux message'}</h1>
        <p>Bye, world!</p>
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => ({
  message: state.default.message,
});

const connectedComponent = connect(
  mapStateToProps,
  { loadMessage },
)(App);

export default hot(module)(connectedComponent);

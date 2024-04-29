import React, { Component } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

class ErrorBoundary extends Component {
  state = {
    isError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);

    this.setState({
      isError: true
    });
  }

  render() {
    if (this.state.isError) {
      return (
        <div className="container">
          <ErrorMessage />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

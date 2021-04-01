import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Log the error to an error reporting service
  // componentDidCatch(error, errorInfo) {}

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;

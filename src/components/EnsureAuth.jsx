import React from 'react';
import { Redirect } from 'react-router';

function EnsureAuth(WrappedComponent) {
  return function(props) {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/" />
    }

    return <WrappedComponent {...props} />
  }
}

export default EnsureAuth;

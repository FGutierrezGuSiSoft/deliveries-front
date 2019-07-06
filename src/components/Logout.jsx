import React from 'react';
import { Redirect } from 'react-router'

function Logout() {
  localStorage.removeItem('token');
  return (
    <Redirect to='/'/>
  );
}

export default Logout;

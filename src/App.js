import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Deliveries from './components/Deliveries';

const rutas = [
  { path: "/", component: Login, exact: true },
  { path: "/register", component: Register, exact: false },
  { path: "/deliveries", component: Deliveries},
  { path: "/logout", component: Logout },
];

function App() {
  return (
    <Router>
      {rutas.map((ruta, index) => <Route key={index} path={ruta.path} exact={ruta.exact} component={ruta.component} />)}
    </Router>
  );
}

export default App;

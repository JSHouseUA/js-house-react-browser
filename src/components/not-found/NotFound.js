import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <NavLink to="/">Home</NavLink>
  </div>
);

export default NotFound;

import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <NavLink to="/blablabla">Тест: переход на NotFound страничку</NavLink>
  </div>
);

export default HomePage;

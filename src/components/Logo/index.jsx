import React from 'react';
import logoImg from './logo.svg';
import './style.css';

function Logo() {
  return (
    <figure className="logo">
      <img src={logoImg} alt="Logo - Check It" className="logo__img" />
    </figure>
  );
}

export default Logo;

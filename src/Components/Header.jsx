import React from 'react';


const Header = ({ image, title }) => {
  return (
    <header className="header">
      <img src={image} alt="header-logo" className="header-image" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};


export default Header;

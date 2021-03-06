import React from 'react';

const Header = (props) =>  {
    return(
      <div className="header" >
      <div className="container"> 
        <h1 className="header__title">{props.title}</h1>
        <h1 className="header__subtitle">Your Decision Logger!</h1>
        </div>
        </div>
    );
      
  };

  Header.defaultProps = {
    title:'Default Title'
  };

  export default Header;


import React from "react";
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

import './header.scss';

export const Header = ({chatId}) => {
    return (
        <div className="header">
            <span className="header__title">Чат {chatId}</span>
            <Link to={'/profile/'} className="header__profile"> 
                <PersonIcon fontSize="large" />
            </Link>
        </div>
    );
  };

  export default Header;
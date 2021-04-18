import React from "react";
import { push, goBack } from 'connected-react-router';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import PushToggle from '../PushToggle';

import './header.scss';

export const Header = ({chatId, profile, push, goBack}) => {
    const handleNavigate = (link) => {
        push(link);
    };

    const handleBack = () => {
        goBack();
    };

    const leftLink = () => {
        if (chatId) {
            return <span className="header__title">Чат {chatId}</span>;
        } else {
            return (
                <span className="header__title"
                    onClick={() => handleBack()}>Назад</span>
            )
        }
    }

    return (
        <div className="header">
            <div className="header__inner">
                <span className="header__title">{ leftLink() }</span>
                <PushToggle />
                <div className="header__profile"
                    onClick={() => handleNavigate('/profile/')}>
                    <span className="header__name">{profile.name}</span>
                    <PersonIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
});

  const mapDispatchToProps = {
    push,
    goBack
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Header);
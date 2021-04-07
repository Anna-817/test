import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './profile.scss';

const Profile = ({ profile }) => {
    return (
        <div className="profile">
            <div className="profile__title">Мой профиль:</div>
            <div className="profile__data">
                <div className="profile__row">
                    <b>Имя:</b> {profile.name}
                </div>
                <div className="profile__row">
                    <b>Фамилия:</b> {profile.surname}
                </div>
                <div className="profile__row">
                    <b>Возраст:</b> {profile.age}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state;
};
  
export default connect(mapStateToProps, actions)(Profile);
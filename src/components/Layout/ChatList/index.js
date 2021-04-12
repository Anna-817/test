import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { List, ListItem } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import AddChat from "./AddChat";
import "./chatList.scss";

const ChatList = ({chats, addChat}) => {
    return (
        <div className="chat-list">  
            <div className="chat-list__title">Chat List</div>
            <div>
                <List className="chat-list__block">
                    {Object.keys(chats).map((value) => {
                        return (
                          <Link to={`/chat/${value}/`} key={value} className="chat-list__item">       
                              <ListItem>
                                  <SendIcon className="chat-list__icon" />
                                  {`Чат ${value}`} 
                              </ListItem>
                          </Link>
                        );
                    })}
                </List>
                <AddChat addChat={addChat} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state;
};
  
export default connect(mapStateToProps, actions)(ChatList);
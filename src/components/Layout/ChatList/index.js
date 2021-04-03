import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import AddChat from "./AddChat";

import "./chatList.scss";

export const ChatList = ({chats, setChats}) => {
    const addChat = () => {
        const chatId = Object.keys(chats).length + 1;

        setChats({...chats, 
            [chatId]: { ...chats[chatId],
                messageList: []
            }
        });
    }
  
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

  export default ChatList;
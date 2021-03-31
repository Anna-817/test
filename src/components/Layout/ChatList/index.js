import React from "react";
import { List, ListItem, ListItemText } from 'material-ui';

import "./chatList.scss";

export const ChatList = () => {
    return (
        <div className="chat-list">  
            <div className="chat-list__title">Chat List</div>
            <div>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return (
                            <ListItem key={value}>
                              {`Line item ${value + 1}`}
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    );
  };

  export default ChatList;
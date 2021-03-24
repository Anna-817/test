import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   constructor() {
      super();

      this.state = {
         messages: ['Привет', 'Как дела?']
      };

      this.addMessage= () => {
         this.setState(({messages}) => {
            return {
                messages: [...messages, 'Нормально']
            }
         }
      );
   }
  };

   render (){
      return (
         <div>
            <MessageField messages={ this.state.messages } />
            <Button addMessage={this.addMessage}/>
         </div>)
   }   
};

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const Button = (props) => {
   return <a href='#'onClick ={props.addMessage}>link</a>
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
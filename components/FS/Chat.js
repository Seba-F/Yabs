/*import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';


export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }*/
 /* render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          alert('d')
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

Chat.defaultProps = {
  name: 'John Smith',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};*/
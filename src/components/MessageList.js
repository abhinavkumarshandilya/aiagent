import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import Message from './Message';

const MessageList = () => {
  const { messages, loading } = useContext(ChatContext);

  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <Message key={idx} text={msg.text} sender={msg.sender} />
      ))}
      {loading && <Message text="Typing..." sender="ai" />}
    </div>
  );
};

export default MessageList;


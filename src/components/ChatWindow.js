import React from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import './ChatWindow.css';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <h2>🤖 AI Chatbot</h2>
      <MessageList />
      <UserInput />
    </div>
  );
};

export default ChatWindow;




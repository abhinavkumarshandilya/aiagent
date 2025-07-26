import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Fake AI Response after 1s
    setTimeout(() => {
      const aiMessage = { text: `You said: "${userMessage.text}"`, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ messages, input, setInput, sendMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
};


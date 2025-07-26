import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const UserInput = () => {
  const { input, setInput, sendMessage } = useContext(ChatContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="user-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default UserInput;


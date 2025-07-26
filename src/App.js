import React from 'react'; // ✅ Keep only one
import { ChatProvider } from './context/ChatContext';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <ChatProvider>
      <ChatWindow />
    </ChatProvider>
  );
}

export default App;



import React from 'react';

function ConversationHistory({ sessions, onLoad }) {
  return (
    <div className="history-panel">
      <h3>Past Conversations</h3>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <button onClick={() => onLoad(session)}>{`Session ${index + 1}`}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationHistory;

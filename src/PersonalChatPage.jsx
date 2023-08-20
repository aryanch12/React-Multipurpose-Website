import React, { useState } from 'react';

const PersonalChatPage = ({ thoughts, startPrivateChat, setSelectedThought }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [privateMessage, setPrivateMessage] = useState('');
  const [privateMessages, setPrivateMessages] = useState([]);

  const selectedThought = thoughts.find(thought => thought.id === startPrivateChat);

  const handlePrivateMessage = (thoughtId) => {
    setSelectedUser(null);
    setSelectedThought(thoughtId);
  };

  const handleSendPrivateMessage = () => {
    if (privateMessage.trim() !== '') {
      const newMessage = {
        username: selectedUser,
        text: privateMessage,
      };
      setPrivateMessages(prevMessages => [...prevMessages, newMessage]);
      setPrivateMessage('');
    }
  };

  return (
    <div className="personal-chat-page">
      <h3>Personal Chat</h3>
      <ul className="user-list">
        {thoughts.map(thought => (
          <li
            key={thought.id}
            onClick={() => handlePrivateMessage(thought.id)}
          >
            {thought.username}
          </li>
        ))}
      </ul>
      {selectedThought && (
        <div className="private-chat">
          <div className="private-chat-header">
            <p className="private-chat-title">Chatting with: {selectedUser}</p>
            <button
              className="private-chat-back"
              onClick={() => setSelectedUser(null)}
            >
              Back
            </button>
          </div>
          <div className="private-chat-messages">
            {privateMessages.map((message, index) => (
              <div className="private-chat-message" key={index}>
                <p className="private-chat-sender">{message.username}</p>
                <p className="private-chat-text">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="private-chat-input">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={privateMessage}
              onChange={(e) => setPrivateMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendPrivateMessage();
                }
              }}
            />
            <button className="private-chat-send" onClick={handleSendPrivateMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalChatPage;




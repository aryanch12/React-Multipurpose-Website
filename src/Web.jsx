import React, { useState } from 'react';
import './index.css';
import PersonalChatPage from './PersonalChatPage'; // Import the PersonalChatPage component

const Web = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedThought, setSelectedThought] = useState(null); // Track selected thought for private chat
  const [privateMessage, setPrivateMessage] = useState(''); // Track private message
  const [showPrivateChat, setShowPrivateChat] = useState(false); // Track whether to show private chat
  const [replyText, setReplyText] = useState(''); // Track reply text

  const handleLogin = (name, email) => {
    setUser({ name, email });
  };

  const handleShareThought = () => {
    if (newThought.trim() !== '' && user) {
      const newThoughtObject = {
        id: Date.now(),
        username: user.name,
        text: newThought,
        replies: [],
      };
      setThoughts((prevThoughts) => [...prevThoughts, newThoughtObject]);
      setNewThought('');
    }
  };

  const handleReply = (thoughtId) => {
    if (replyText.trim() !== '') {
      const updatedThoughts = thoughts.map((thought) => {
        if (thought.id === thoughtId) {
          return {
            ...thought,
            replies: [
              ...thought.replies,
              { username: user.name, text: replyText },
            ],
          };
        }
        return thought;
      });
      setThoughts(updatedThoughts);
      setReplyText(''); // Clear reply text after adding the reply
    }
  };

  const handlePrivateMessage = (thoughtId) => {
    setSelectedThought(thoughtId);
    setPrivateMessage('');
    setShowPrivateChat(true); // Show the private chat section
  };

  const handleSendPrivateMessage = () => {
    if (privateMessage.trim() !== '') {
      const privateMessageObject = {
        username: user.name,
        text: privateMessage,
      };
      const updatedThoughts = thoughts.map((thought) => {
        if (thought.id === selectedThought) {
          return {
            ...thought,
            replies: [...thought.replies, privateMessageObject],
          };
        }
        return thought;
      });
      setThoughts(updatedThoughts);
      setSelectedThought(null);
      setPrivateMessage('');
    }
  };

  return (
    <div className="container">
      {user ? (
        <div className="mb-3">
          <p className="user-info">Logged in as: {user.name} ({user.email})</p>
          <textarea
            className="form-control mt-2"
            rows="3"
            placeholder="Share your thought..."
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
          />
          <button
            className="btn-get-started mt-2"
            onClick={handleShareThought}
          >
            Share
          </button>
        </div>
      ) : (
        <div className="login">
          <h2>Log<strong className="brand-name">in</strong></h2>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn-get-started mt-2"
            onClick={() => handleLogin(name, email)}
          >
            Login
          </button>
        </div>
      )}

      <div className="thoughts">
        {thoughts.map((thought) => (
          <div className="card mb-3" key={thought.id}>
            <div className="card-body">
              <p className="main-thought">
                <strong>{thought.username}</strong>: {thought.text}
              </p>
              <div className="replies">
                {thought.replies.map((reply, index) => (
                  <div className="reply" key={index}>
                    <p className="reply-thought">
                      <strong>{reply.username}</strong>: {reply.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mb-2">
  <input
    type="text"
    className="form-control"
    placeholder="Reply to this thought..."
    value={replyText}
    onChange={(e) => setReplyText(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleReply(thought.id);
      }
    }}
  />
  <button
    className="btn-get-started mt-2"
    onClick={() => handlePrivateMessage(thought.id)}
  >
    Start Private Chat
  </button>
  <button
    className="btn-get-started mt-4 reply-button"
    onClick={() => handleReply(thought.id)}
  >
    Reply
  </button>
</div>
            </div>
          </div>
        ))}
      </div>

      {showPrivateChat && (
        <PersonalChatPage
          thoughts={thoughts}
          startPrivateChat={selectedThought}
          setSelectedThought={setSelectedThought}
          privateMessage={privateMessage}
          setPrivateMessage={setPrivateMessage}
          handleSendPrivateMessage={handleSendPrivateMessage}
        />
      )}
    </div>
  );
};

export default Web;






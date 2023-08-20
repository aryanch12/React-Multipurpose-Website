import React, { useState } from 'react';
import TeacherProfile from './TeacherProfile'; 

const Cplus = () => {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState(null);

  const [showHireForm, setShowHireForm] = useState(false);
  const [hireName, setHireName] = useState('');
  const [hireEmail, setHireEmail] = useState('');
  const [hirePhone, setHirePhone] = useState('');
  const [hours, setHours] = useState('');
  const [payment, setPayment] = useState('');

  const [showPrivateChatForm, setShowPrivateChatForm] = useState(false);
  const [privateChatTeacher, setPrivateChatTeacher] = useState(null);
  const [privateChatMessage, setPrivateChatMessage] = useState('');

  const [privateChatMessages, setPrivateChatMessages] = useState({});

  const handleCreateProfile = () => {
    if (name && subject && price && picture) {
      const newProfile = {
        id: Date.now(),
        name,
        subject,
        price,
        phone,
        picture,
      };
      setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
      setName('');
      setSubject('');
      setPrice('');
      setPhone('');
      setPicture(null);
    }
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleHireClick = (profile) => {
    setShowHireForm(true);
    setHireName(profile.name);
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    const hireDetails = {
      name: hireName,
      email: hireEmail,
      phone: hirePhone,
      hours,
      payment,
    };
    localStorage.setItem('hireDetails', JSON.stringify(hireDetails));
    setHireName('');
    setHireEmail('');
    setHirePhone('');
    setHours('');
    setPayment('');
    setShowHireForm(false);
    alert('You have a new hire request!');
  };

  const handlePrivateChatClick = (teacher) => {
    setPrivateChatTeacher(teacher);
    setShowPrivateChatForm(true);
  };

  const handlePrivateChatSubmit = (e) => {
    e.preventDefault();
    if (privateChatMessage.trim() !== '') {
      const newMessage = {
        sender: 'User', // Assuming the sender is the user for now
        message: privateChatMessage,
      };
      const updatedMessages = {
        ...privateChatMessages,
        [privateChatTeacher.name]: [
          ...(privateChatMessages[privateChatTeacher.name] || []),
          newMessage,
        ],
      };
      setPrivateChatMessages(updatedMessages);
      setPrivateChatMessage('');
    }
  };
  

  return (
    <div className="container">
      <h1>Student <strong className="brand-name">Tutor Profiles</strong></h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Subject to Teach"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          className="form-control mt-2"
          placeholder="Price per Hour"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="form-control mt-2"
          onChange={handlePictureChange}
        />
        <button className="btn-get-started mt-2" onClick={handleCreateProfile}>Create Profile</button>
      </div>
      <div className="profiles">
        {profiles.map((profile) => (
          <div className="card mb-3" key={profile.id} style={{ maxWidth: '300px' }}>
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <img
                src={URL.createObjectURL(profile.picture)}
                alt="Profile"
                className="img-fluid mb-2 profile-image"
              />
              <p className="card-text">Teaching: {profile.subject}</p>
              <p className="card-text">Phone Number: {profile.phone}</p>
              <p className="card-text">Price per Hour: Rupess {profile.price}</p>
              <button className="btn-get-started" onClick={() => handleHireClick(profile)}>Hire</button>
              <button className="btn-get-started  reply-button" onClick={() => handlePrivateChatClick(profile)}>Private Chat</button>
            </div>
          </div>
        ))}
      </div>
      {showHireForm && (
  <div className="mt-4">
    <h2>Hire {hireName}</h2>
    <form onSubmit={handleHireSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={hireName}
          disabled
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          value={hireEmail}
          onChange={(e) => setHireEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone Number"
          value={hirePhone}
          onChange={(e) => setHirePhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Number of Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Payment Amount"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-get-started">Submit</button>
    </form>
  </div>
)}
{showPrivateChatForm && privateChatTeacher && (
  <div className="mt-4">
    <h2>Private Chat with {privateChatTeacher.name}</h2>
    <div className="private-chat-messages">
      {privateChatMessages[privateChatTeacher.name]?.map((message, index) => (
        <div key={index} className="private-chat-message">
          <strong>{message.sender}:</strong> {message.message}
        </div>
      ))}
    </div>
    <form onSubmit={handlePrivateChatSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Message"
          value={privateChatMessage}
          onChange={(e) => setPrivateChatMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-get-started">Send</button>
    </form>
  </div>
)}


      <TeacherProfile />
    </div>
  );
};

export default Cplus;




import React, { useState } from 'react';

const Data = () => {
  const [groups, setGroups] = useState([]);

  const handleJoinClick = (link) => {
    window.open(link, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const group = {
      name: e.target.name.value,
      link: e.target.link.value,
    };
    setGroups([...groups, group]);
    e.target.reset();
  };

  return (
    <div className="container mt-4">
      <h1> WhatsApp <strong className="brand-name">Groups</strong></h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Group<strong className="brand-name"> Name</strong>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
           WhatsApp <strong className="brand-name">Link</strong>
          </label>
          <input type="text" className="form-control" id="link" required />
        </div>
        <button className="btn-get-started" type="submit">
          Add Group
        </button>
      </form>
      <div className="row">
        {groups.map((group, index) => (
          <div className="col-md-4 col-sm-6 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{group.name}</h5>
                <button
                  className="btn-get-started"
                  onClick={() => handleJoinClick(group.link)}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;


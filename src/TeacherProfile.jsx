import React from 'react';


const TeacherProfile = () => {
  // Retrieve hire details from local storage
  const storedHireDetails = JSON.parse(localStorage.getItem('hireDetails'));

  return (
    <div className="teacher-profile">
      <h1><strong className="brand-name">Your</strong> Teacher Profile</h1>
      {/* Display hire details */}
      {storedHireDetails && (
        <div>
          <h2>New <strong className="brand-name">Hire Request</strong></h2>
          <p>Name: {storedHireDetails.name}</p>
          <p>Email: {storedHireDetails.email}</p>
          <p>Phone: {storedHireDetails.phone}</p>
          <p>Hours: {storedHireDetails.hours}</p>
          <p>Payment: {storedHireDetails.payment}</p>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileCard = ({ name, college, skills }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{college}</h6>
        <p className="card-text"><strong>Skills:</strong> {skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

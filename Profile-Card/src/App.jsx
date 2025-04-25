import React from 'react';
import ProfileCard from './assets/profilecard';

function App() {
  const profiles = [
    { name: "Rishi Mittal", college: "Manipal University Jaipur", skills: ["HTML", "CSS", "React"] },
    { name: "Sharma", college: "Delhi University", skills: ["Python", "JavaScript", "Bootstrap"] },
    { name: "Das", college: "IIT Kharagpur", skills: ["C++", "Node.js", "MongoDB"] }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Profile Cards</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            college={profile.college}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

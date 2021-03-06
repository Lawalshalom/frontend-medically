import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <a className="btn myBtn" href="/signup">
        Sign Up
      </a>
      <a className="btn myBtn" href="/login">
        Login
      </a>
    </div>
  );
};

export default Home;

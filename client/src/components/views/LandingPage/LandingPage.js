import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log(response));
  }, []);

  return (
    <div>
      <p>LandingPage</p>
    </div>
  );
};

export default LandingPage;

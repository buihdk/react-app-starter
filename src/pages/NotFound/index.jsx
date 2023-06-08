import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <>
      <h1>404 Page not found</h1>
      <h2>Sorry, the page you visited does not exist.</h2>
      <button type="button" onClick={handleClick}>
        Back Home
      </button>
    </>
  );
};

export default NotFoundPage;

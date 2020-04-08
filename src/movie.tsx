import React, { useEffect, useState } from 'react';
import './App.css';

interface Props {
  title: string;
  poster: string;
}

const Movie: React.FC<Props> = ({ title, poster }) => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    console.log('uesEffect');
    setStatus(1);
  }, [status]);

  const chanageStatus = () => {
    console.log('chanageEffect');
    setStatus(2);
  };

  return (
    <div>
      <h1>{title} </h1>
      <img
        onClick={chanageStatus}
        src={poster}
        className="mapleStory"
        alt="안녕"
      />
    </div>
  );
};

export default Movie;

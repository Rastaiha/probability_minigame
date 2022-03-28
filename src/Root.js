import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Minigame1 from './minigames/Minigame1';

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Minigame1 />} />
    </Routes>
  );
};

export default MyRoute;

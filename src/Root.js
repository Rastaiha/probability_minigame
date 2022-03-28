import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Minigame1 from './minigames/Minigame1';
import Minigame2 from './minigames/Minigame2';
import Minigame3 from './minigames/Minigame3';
import Minigame4 from './minigames/Minigame4';

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/1" element={<Minigame1 />} />
      <Route path="/2" element={<Minigame2 />} />
      <Route path="/3" element={<Minigame3 />} />
      <Route path="/4" element={<Minigame4 />} />
    </Routes>
  );
};

export default MyRoute;

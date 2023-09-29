import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import LayoutPage from './pages/LayoutPage/LayoutPage';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';


const App = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path='/' element={<HomePage />} />
        <Route path='result' element={<ResultPage />} />
      </Route>
    </Routes>

  );
};

export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

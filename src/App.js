import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from './components/Signin';
// import SignInSide from './components/SignInSide';
import SignUpSide from './components/SignUpSide';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInSide/>} />
          <Route path="/signup" element={<SignUpSide/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

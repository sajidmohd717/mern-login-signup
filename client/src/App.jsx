import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

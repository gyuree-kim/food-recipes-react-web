import React from "react";
import Home from './routers/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./routers/Post";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Home from './routers/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./routers/PostPage";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/PostPage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

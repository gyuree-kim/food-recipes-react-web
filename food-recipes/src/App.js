import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./router/Home_"
import Post from "./router/Post"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

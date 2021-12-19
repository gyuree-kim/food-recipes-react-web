import React from "react";
import Home from "./router/Home"
import Detail from "./router/RecipeDetail"
import Post from "./router/Post"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import TopNavbar from "./Components/Navbar/TopNavbar"

function App() {
  return (
    <Router>
      <TopNavbar />
      {/* routing destinations */}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path={'/detail/:detailId'} element={<Detail />}/>
        <Route path={"/Post"} element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;



import React from "react";
import Home from "./router/Home_"
import Post from "./router/Post_"
import Detail from "./router/RecipeDetail"
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
      <Link to="/detail/30">Declaritive Routing</Link>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path={'/detail/:detailId'} element={<Detail/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </Router>
  );
}

export default App;



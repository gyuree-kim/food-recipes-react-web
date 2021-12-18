import React from "react";
import NaviBar from "../Components/Navbar/TopNavbar";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home_() {
    let navigate = useNavigate();
  
    return(
        <div>
            <Button 
            variant="text"
            onClick={ () => {
                navigate("/detail/123")
            }}
            >
                Programming Routing
            </Button>
        home
        </div>
    )
  }
export default Home_;
import React from "react";
import { useParams } from "react-router-dom";
import PrimarySearchAppBar from "../Components/Navbar/TopNavbar";
import StandardImageList  from "../Components/RecipeImage/RecipeImage"

export default function FoodDetail() {
    // path에 " ":parameter " 로 선언되어있다면 useParams() hook으로 데려올 수 있습니다.
    // ex:) <Route path="/detail/:detailId ... />"
    let { detailId } = useParams();
  
    return (
        <center>
            <StandardImageList></StandardImageList>
            <div className="div_middle">{postId[0].postName}</div>
        </center>
    )
  }
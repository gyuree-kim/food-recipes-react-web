import React from "react";
import { useParams } from "react-router-dom";

export default function FoodDetail() {
    // path에 " ":parameter " 로 선언되어있다면 useParams() hook으로 데려올 수 있습니다.
    // ex:) <Route path="/detail/:detailId ... />"
    let { detailId } = useParams();
  
    return (
      <div>
        <h3>detail id is {detailId}</h3>
      </div>
    )
  }
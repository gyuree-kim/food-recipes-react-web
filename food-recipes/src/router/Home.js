import { textAlign } from "@mui/system";
import React from "react";
import RecipeList from "../UI/RecipeList"

export default function Home() {
    return (
        <div>
            <h1 style={{
                textAlign:'center'
            }}>오늘의 메뉴</h1>
            <RecipeList />
        </div>
    )
  }
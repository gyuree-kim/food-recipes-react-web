import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {getPost} from "../firebase"
import PrimarySearchAppBar from "../Components/Navbar/TopNavbar";
import StandardImageList  from "../Components/RecipeImage/RecipeImage"
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from "react-router-dom"
import BasicStack from "../Components/Stack"
import "../App.css"



export default function FoodDetail() {
    // path에 " ":parameter " 로 선언되어있다면 useParams() hook으로 데려올 수 있습니다.
    // ex:) <Route path="/detail/:detailId ... />"
    let { detailId } = useParams();

    const [postId, setPostId] = useState("")

    useEffect(() => {
      async function getPostId() {
        const postList = await getPost();
        //setPostId(postList[0].postId)

          var k;
          for (var i = 0; i < postList.length; i++)
              if (postList[i].postId == detailId)
                  k = i

        setPostId(postList[k])
      }

      getPostId();

      return;
    }, [setPostId])
  
    return (
        <div>
            <ImageList sx={{ flexGrow: 1, paddingLeft: 60, paddingRight: 60 }} cols={1} gap={20}>
                <DetailRecipeItem
                    imageUrl={`${postId.fileUrl[0]}`}
                />
                <ImageListItemBar
                sx={{color: "black"}}
                title={postId.postName}
                subtitle={postId.postContent}
                position="below"
                />
            </ImageList>

        <h2>재료</h2>

        <BasicStack Items={postId.postIngredient}></BasicStack>
            
            <h2>조리순서</h2>
            <ImageList sx={{ flexGrow: 1, paddingLeft: 60, paddingRight: 60 }} cols={1} gap={20}>
                {postId.postRecipe.map((item, index) => (
                <DetailRecipeItem
                    imageUrl={`${postId.fileUrl[index+1]}`}
                    contents={postId.postRecipe[index]}
                />
            ))}
            </ImageList>

        </div>
    )
  }

  const DetailRecipeItem = ({ imageUrl, contents }) => {
    return (
        <ImageListItem>
            <img
                src={imageUrl}
                loading="lazy"
            />
            <ImageListItemBar
                sx={{color: "black"}}
                subtitle={contents}
                position="below"
            />
        </ImageListItem>

    )
}
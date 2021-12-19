import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getRecipes } from "../firebase"
import PrimarySearchAppBar from "../Components/Navbar/TopNavbar";
import StandardImageList  from "../Components/RecipeImage/RecipeImage"
import { ImageList, ImageListItem, ImageListItemBar, Box, TextField, Button } from '@mui/material';
import { Link } from "react-router-dom"
import BasicStack from "../Components/Stack"
import BasicTextFields from "../Components/CommentTextBox"
import InputTextField from "../Components/InputTextField"
import { getDatabase, ref, set } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";
import { submitComment } from '../firebase';
import "../App.css"

const FoodDetail = () => {
    // path에 " ":parameter " 로 선언되어있다면 useParams() hook으로 데려올 수 있습니다.
    // ex:) <Route path="/detail/:detailId ... />"
    let {detailId} = useParams();
    console.log(detailId);

    const [postId, setPostId] = useState("")
    const [comment, setComment] = useState("");

    const onCommentChange = (event) => {
        setComment(event.target.value);
    };

    useEffect(() => {
        async function getPostId() {
            const postList = await getRecipes();

            var k = 0;
            for (var i = 0; i < postList.length; i++)
                if (postList[i].postId == detailId)
                {
                    k = i;
                }

            setPostId(postList[k])
        }

        getPostId();

        return;
    }, [setPostId])

    return (
            <div>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    }}
                >
                    {postId && <DetailRecipeItem
                        imageUrl={postId.fileUrl[0]}
                        title={postId.postName}
                        contents={postId.postContent}
                    />}
                </Box>
                <h2>재료</h2>

                <BasicStack Items={postId.postIngredient}></BasicStack>

                <h2>조리순서</h2>
                <ImageList sx={{flexGrow: 1, paddingLeft: 50, paddingRight: 50}} cols={1} gap={20}>
                    {postId && postId.postRecipe && postId.postRecipe.map((item, index) => (
                        <DetailRecipeItem
                            imageUrl={postId.fileUrl[index + 1]}
                            title = {item}
                            contents={""}
                        />))
                    }
                </ImageList>
                <h2>댓글</h2>
                <TextField
                    id="outlined-textarea"
                    label="댓글"
                    placeholder="댓글을 입력해주세요."
                    multiline
                    onChange={onCommentChange}
                />
                <Button 
                    variant="contained"
                    // onClick={(submitComment(postId, comment))}
                >등록</Button>
                <BasicTextFields></BasicTextFields>
                {postId && postId.comments.map((comments, index) => (
                    <h5>{"익명"}{index + 1}{" : "}{comments}</h5>
                ))}
            </div>
        )
    }

  const DetailRecipeItem = ({ imageUrl, title, contents }) => {
    return (
        <ImageListItem>
            <img
                src={imageUrl}
                alt={title}
                loading="lazy"
            />
            <ImageListItemBar
                sx={{color: "black"}}
                title={title}
                subtitle={contents}
                position="below"
            />
        </ImageListItem>

    )
}


  export default FoodDetail;
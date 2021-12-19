import { React, useState, useEffect } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from "react-router-dom"
import { getRecipes } from "../firebase";

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        const fetch = async () => {
            setRecipeList(await getRecipes())
        }

        fetch()

        return
    }, [setRecipeList])


    return (
        <ImageList sx={{ flexGrow: 1, paddingLeft: 50, paddingRight: 50 }} cols={3} gap={20}>
            {recipeList.map((item) => (
                <Link key={item.postId} to={`/detail/${item.postId}`} style={{ textDecoration: 'none' }}>
                    <RecipeItem 
                        imageUrl={`${item.fileUrl[0]}`} 
                        title={item.postName}
                        subtitle={item.postContent[0]}
                    />
                </Link>
            ))}
      </ImageList>
    )
}

const RecipeItem = ({ imageUrl, title, subtitle }) => {
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
                subtitle={subtitle}
                position="below"
            />
        </ImageListItem>
    )
}


export default RecipeList
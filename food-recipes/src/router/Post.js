import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

const StyledSwiper = styled(Swiper)`
    width: 752px;
    height: 700px;
    text-align: center;
`;


const Button = styled.button`
    padding: 10px 20px;
    color: white;
    border: none;
    background-color: #007aff;
    :hover {
        background-color: #509EF3;
    }
`;

SwiperCore.use([Navigation, Pagination])

function Create () {
    const [length, setLength] = useState(0);

    const [title, setTitle] = useState("");
    const [detailImgs, setDetailImgs] = useState([]);
    const [gredients, setGredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    //사진을 업로드 하고 생긴 url 배열로 detailImgs에 저장하고 배열의 크기를 getLength에 저장
    const handleImageUpload = (e) => {
        const fileArr = e.target.files;
    
        let fileURLs = [];
       
        let file;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
        
        setLength(e.target.files.length);

        for (let i = 0; i < filesLength; i++) {
          file = fileArr[i];
        
          let reader = new FileReader();
          reader.onload = () => {
            console.log(reader.result);
            fileURLs[i] = reader.result;
            setDetailImgs([...fileURLs]);
          };
          reader.readAsDataURL(file);
        }
    };

    //제목 값을 받아오는 함수
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    //firebase에 저장
    /*const upLoadRef = doc(db, "post", getTitle);
    await setDoc(upLoadRef, {
        fileUrl: detailImgs,

    })*/

    return (<Box 
                sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    paddingLeft: 50,
                    paddingRight: 50,
                    paddingTop: 10
                    }}
            >
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                >
                    <label className="col-sm-2 control label required" htmlFor="blog_post_title">제목</label>
                    <TextField fullWidth onChange={handleTitle}/>
                </Box>

                { /* 파일 업로드 */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <input type="file" accept="image/*" onChange={handleImageUpload} multiple />
                </Box>
                <StyledSwiper
                            className="Upload_Picture"
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{clickable:true}}
                    >
                    { detailImgs.map((item, index) => (
                        <SwiperSlide>
                            <img src={item} />
                        </SwiperSlide>
                    )) }
                </StyledSwiper>
                
                <h4>재료</h4>
                <Box
                    sx={{
                     }}
                >
                    { gredients.concat([""]).map((item, index) => 
                        <Box sx = {{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center"
                        }}>
                            <h4>{index + 1}</h4>
                            <TextField
                                id={item}
                                variant="standard"
                                fullWidth
                                value={item}
                                onChange= {(e) => {
                                    const _gredient = e.target.value;

                                    const _gredients = gredients.slice()
                                    _gredients[index] = _gredient
                                    setGredients(_gredients)
                                }}
                            />
                        </Box>
                    )}
                </Box>

                <Box sx={{ paddingTop: 20}}/>

                <h4>레시피</h4>
                <Box
                    sx={{
                        
                     }}
                >
                    { recipes.concat([""]).map((item, index) => 
                        <Box sx = {{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center"
                        }}>
                            <h4>{index + 1}</h4>
                            <TextField
                                id={item}
                                variant="standard"
                                fullWidth
                                value={item}
                                onChange= {(e) => {
                                    const _recipe = e.target.value;

                                    const _recipes = recipes.slice()
                                    _recipes[index] = _recipe
                                    setRecipes(_recipes)
                                }}
                            />
                        </Box>
                    )}
                </Box>
                
                { /* 작성 완료 */ }
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: 10
                    }}
                >
                    <Button
                        type="submit"
                        id="blog_post_submit"
                        className="btn-default btn">
                        완료
                    </Button>
                </Box>
            </Box>
            );
}


export default Create;
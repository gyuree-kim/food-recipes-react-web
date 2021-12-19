import React, { useState } from 'react';
import NaviBar from "../Components/Navbar/TopNavbar";
import InputTextField from '../Components/InputTextField';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Grid } from '@mui/material';

const TitleDiv = styled.div`
    position: absolute;
    margin-top: 50px;
    left: 50%;
    transform: translate(-50%);
`;

const FileUpDiv = styled.div`
    position: absolute;
    margin-top: 200px;
    left: 50%;
    transform: translate(-50%);
`;

const InputDiv = styled.input`
position: absolute;
    left: 100%;
`;

const IndiDiv = styled.div`
    position: absolute;
    margin-top: 1000px;
    left: 50%;
    transform: translate(-50%);
    width: 1000px;
`;

const GriDiv = styled.div`
    border: 1px solid black;
    border-radius: 30px;
    width: 1000px;
    height: 270px;
`;

const StepDiv = styled.div`
    position: absolute;
    margin-top: 1400px;
    left: 50%;
    transform: translate(-50%);
    width: 1000px;
`;

const StyledSwiper = styled(Swiper)`
    width: 752px;
    height: 700px;
    text-align: center;
`;

const FinDiv = styled.div`
    position: absolute;
    margin-top: 1800px;
    left: 80%;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    color: white;
    border: none;
    background-color: #336655;
    :hover {
        background-color: #3AC798;
    }
`;

SwiperCore.use([Navigation, Pagination])

function Create () {
    const [detailImgs, setDetailImgs] = useState([]);
    const [getLength, setGetLength] = useState(0);
    
    //사진을 업로드 하고 생긴 url 배열로 detailImgs에 저장하고 배열의 크기를 getLength에 저장
    const handleImageUpload = (e) => {
        const fileArr = e.target.files;
    
        let fileURLs = [];
       
        let file;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
        
        setGetLength(e.target.files.length);

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

    return (
        <div>
            <div><NaviBar /></div>
            <form name="blog_post" className="form-horizontal">
                <div id="blog_post">
                    <TitleDiv className='col-sm-2'>
                        <Box 
                            sx={{
                                width: 1000,
                                maxWidth: '100%',
                            }}>
                            <label className="col-sm-2 control label required" htmlFor="blog_post_title">제목</label>
                            <TextField fullWidth />
                        </Box>
                    </TitleDiv>
                    <FileUpDiv className='col-sm-2'>
                        <InputDiv type="file" accept="image/*" onChange={handleImageUpload} multiple />
                        <div>
                            <StyledSwiper
                                className="Upload_Picture"
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{clickable:true}}
                            >
                                {0 < getLength && <SwiperSlide>
                                    <img src={detailImgs[0]} alt="profile" />
                                </SwiperSlide>}
                                {1 < getLength && <SwiperSlide>
                                    <img src={detailImgs[1]} alt="profile" />
                                </SwiperSlide>}
                                {2 < getLength && <SwiperSlide>
                                    <img src={detailImgs[2]} alt="profile" />
                                </SwiperSlide>}
                                {3 < getLength && <SwiperSlide>
                                    <img src={detailImgs[3]} alt="profile" />
                                </SwiperSlide>}
                                {4 < getLength && <SwiperSlide>
                                    <img src={detailImgs[4]} alt="profile" />
                                </SwiperSlide>}
                                {5 < getLength && <SwiperSlide>
                                    <img src={detailImgs[5]} alt="profile" />
                                </SwiperSlide>}
                                {6 < getLength && <SwiperSlide>
                                    <img src={detailImgs[6]} alt="profile" />
                                </SwiperSlide>}
                                {7 < getLength && <SwiperSlide>
                                    <img src={detailImgs[7]} alt="profile" />
                                </SwiperSlide>}
                                {8 < getLength && <SwiperSlide>
                                    <img src={detailImgs[8]} alt="profile" />
                                </SwiperSlide>}
                            </StyledSwiper>
                        </div>
                    </FileUpDiv>
                    <IndiDiv>
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_ingredients">재료 Ingredients</label>
                        <GriDiv>
                            <Grid container spacing={2}>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>1.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>2.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>3.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>4.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>5</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                            </Grid>
                        </GriDiv>
                    </IndiDiv>
                    <StepDiv className='col-sm-2'>
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_steps">조리순서 steps</label>
                        <GriDiv>
                            <Grid container spacing={2}>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>1.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>2.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>3.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>4.</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}></Grid>
                                <Grid item xs={0.5} md={0.5}>5</Grid>
                                <Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}><Divider orientation="vertical"/></Grid><Grid item xs={5} md={5}>
                                    <InputTextField />
                                </Grid><Grid item xs={0.5} md={0.5}></Grid>
                            </Grid>
                        </GriDiv>
                    </StepDiv>
                    <FinDiv>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <Button type="submit"
                                        id="blog_post_submit"
                                        className="btn-default btn">
                                    완료
                                </Button>
                            </div>
                        </div>
                    </FinDiv>
                </div>
            </form>
        </div>
    );
}


export default Create;
import React from "react";
import Pagination from '@mui/material/Pagination';
import imgA from './home.JPG';
import CategoryChips from './CategoryChips';
import styled from 'styled-components';

const TodayDiv = styled.div`
    margin-top: 83px;
    text-align: center;
    margin-bottom: 57px;
    font-size: 40px;
    font-family: Roboto;
    line-height: 47px;

`;

const PageDiv = styled.div`
    text-align: center;
`;

const Home = () => {
    return (
        <>
            <TodayDiv>(navigation)</TodayDiv>
            <div>
                <img src={imgA} alt="profile"/>
            </div>
            <TodayDiv>오늘의 메뉴</TodayDiv>
            <div><CategoryChips /></div>
            <TodayDiv>(usecomponents)</TodayDiv>
            <PageDiv>
                <Pagination count={10} variant="outlined"/>
            </PageDiv>
        </>
    )
}

export default Home;
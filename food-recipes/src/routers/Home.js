import React from "react";
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';

const NameDiv = styled.div`
    margin-top: 83px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    margin-bottom: 57px;
    font-size: 40px;
    font-family: Roboto;

`;

const PageDiv = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    text-align: center;
    justify-content: center;
`;

const Home = () => {
    return (
        <>
            <NameDiv>오늘의 메뉴</NameDiv>
            <PageDiv>
                <Pagination count={10} variant="outlined"/>
            </PageDiv>
        </>
    )
}

export default Home;
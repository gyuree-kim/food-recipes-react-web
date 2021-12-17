import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import PrimarySearchAppBar from '../Components/Navbar/TopNavbar'
import Post from "./Post";
import Pagination from "./Pagination";
import axios from 'axios';

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

function Home() {

    const [post, setPost] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); 
	const [postPerPage] = useState(9); 

  	useEffect(() => {
    		const fetchPost = async () => {
      		const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      		setPost(res.data);
    	};

    	fetchPost();
    }, []);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <div><PrimarySearchAppBar /></div>
            <NameDiv>오늘의 메뉴</NameDiv>
            <Post post={currentPost} />
            <Pagination postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
        </div>
    )
}

export default Home;
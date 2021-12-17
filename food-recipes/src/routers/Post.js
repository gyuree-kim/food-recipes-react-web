import React from "react";
import styled from 'styled-components';

const Ul = styled.ul`
    position: absolute;
    margin-top: 200px;
    width: 1900px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
`;

const Post = ({ post }) => {
    return (
        <Ul className="list-group mb-4">
        {post && post.map((post) => (
            <li key={post.id} className="list-group-item">
                {post.title}
            </li>
        ))}
        </Ul>
    );
};

export default Post;
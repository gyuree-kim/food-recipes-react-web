import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
    position: absolute;
    margin-top: 1100px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
`;

const Ul = styled.ul`
    display: inline-block;
    list-style: none;
    margin: 50;
    padding: 0;
    margin-left: 10;
`;

const Li = styled.li`
    float: left;
    color: green;
    border: 1px solid lightgray;
    a {
        padding: 0 10px;
        margin: 0 0px;
    }
`;

const Pagination = ({ postPerPage, totalPost, paginate }) => {
    const pageNumber = [];
    
    // Math.ceil: 올림
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <Nav>
            <Ul className="pagination">
                {pageNumber.map(pageNum => (
                    <Li key={pageNum} className="page-item">
                        <Link 
                            onClick={() => paginate(pageNum)} 
                            to='' 
                            className='page-link'
                            >
                            {pageNum}
                        </Link>
                    </Li>
                ))}
            </Ul>
        </Nav>  
    );
};

export default Pagination;
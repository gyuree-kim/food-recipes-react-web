import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 12px;
    border-radius: 30px;
    font-size: 24;
    line-height: 1.5;
    border: 1px solid lightgray;
    boxShadow: none;
    width: 100px;
    height: 30px;
    background-color: #CECECE;

    &:hover {
      background: #336644;
    }
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  margin-left: 20px;
  margin-top: 10px;
  
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background-color: #336655;
    color: white;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  width: 850px;
  margin-left: 500px;
`;
const types = ['전체보기', '고기', '해물', '가공식품', '채소', '과일', '기타'];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ToggleGroup;
import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
    flex: .4;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

const Indicator = styled.View`
    width: 7px;
    height: 7px;
    borderRadius: 7px;
    backgroundColor: ${({ bg }) => bg ? '#ed2174' : `lightgray`};
    marginHorizontal: 5px;
`;

export default ({ items, active }) =>
    <Wrapper>
        {items.map((_, index) => <Indicator key={index} bg={active == index} />)}
    </Wrapper>
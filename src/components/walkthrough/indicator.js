import React from "react";
import styled from "styled-components/native";
import constants from "./../../utils/constants";

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
    backgroundColor: ${({ bg }) => bg ? constants.primaryColor : `lightgray`};
    marginHorizontal: 5px;
`;

export default ({ items, activeItemIndex }) =>
    <Wrapper>
        {items.map((_, index) => <Indicator key={index} bg={activeItemIndex === index} />)}
    </Wrapper>
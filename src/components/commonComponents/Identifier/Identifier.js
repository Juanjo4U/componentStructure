import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";

const Wrapper = styled.View`
    width: ${({ w }) => w || 100}px;
    height: ${({ h }) => h || 20}px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${({ bg }) => bg || 'lightgray'};
    borderRadius: 5px;
`;

export default ({ color, label }) =>
    <Wrapper bg={color} >
        <Label c='white' fs={12} >{label}</Label>
    </Wrapper>
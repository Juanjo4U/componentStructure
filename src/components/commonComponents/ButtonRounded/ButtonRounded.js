import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";

const Wrapper = styled.View`
    width: 100%;
    height: 50px;
    backgroundColor: #ed2174;
    borderRadius: 30px;
    justifyContent: center;
    alignItems: center;
`;

export default ({ label, upperCase }) =>
    <Wrapper>
        {label && <Label c='white' >{upperCase ? label.toUpperCase() : label}</Label>}
    </Wrapper>
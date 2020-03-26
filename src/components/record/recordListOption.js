import React from "react";
import { Label } from "../commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import constants from "../../utils/constants";
import { sizeNormalize } from "../../utils/adaptSizes";

const Wrapper = styled.View`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || constants.secondaryColor};
    paddingHorizontal: ${sizeNormalize(10)}px;
    justifyContent: center;
    alignItems: center;
    ${({ isActive }) => isActive && `
        borderBottomColor: ${constants.primaryColor};
        borderBottomWidth: ${sizeNormalize(2)}px;
    `}
`;

export default ({ label, isActive }) =>
    <Wrapper isActive={isActive} >
        <Label
            c={isActive ? constants.linkColor : constants.textThirdColor}
        >
            {label.toUpperCase()}
        </Label>
    </Wrapper>
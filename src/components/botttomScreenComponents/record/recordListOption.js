import React from "react";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    height: 40px;
    backgroundColor: ${({ bg }) => bg || constants.backgroundColor};
    paddingHorizontal: ${sizeNormalize(10)}px;
    justifyContent: center;
`;

const Underline = styled.View`
    backgroundColor: ${constants.primaryColor};
    width: 20px;
    height: 3px;
    marginLeft: ${sizeNormalize(10)}px;
    position: absolute;
    bottom: 0;
`;

export default ({ label, isActive }) =>
    <Wrapper>
        <Label
            c={isActive ? constants.linkColor : constants.textThirdColor}
        >
            {label.toUpperCase()}
        </Label>
        {isActive && <Underline />}
    </Wrapper>
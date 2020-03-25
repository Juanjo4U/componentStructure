import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    width: 100%;
    height: ${sizeNormalize(40)}px;
    backgroundColor: ${constants.primaryColor};
    borderRadius:  ${sizeNormalize(30)}px;
    justifyContent: center;
    alignItems: center;
`;

export default ({ label, upperCase }) =>
    <Wrapper>
        {label && <Label c={constants.textSecondaryColor} >{upperCase ? label.toUpperCase() : label}</Label>}
    </Wrapper>
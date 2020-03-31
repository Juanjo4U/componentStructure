import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    paddingHorizontal: ${sizeNormalize(10)}px;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(20)}px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${({ bg }) => bg || constants.lightGrey};
    borderRadius: 5px;
`;

export default ({ color, label }) =>
    <Wrapper bg={color} >
        <Label c={constants.textSecondaryColor} fs={12} >{label}</Label>
    </Wrapper>
import React from "react";
import logo from "../../../assets/logo/logo";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    flex: 1;
    paddingHorizontal: ${sizeNormalize(20)}px;
    marginBottom: ${sizeNormalize(10)}px;
`;

const Logo = styled.Image`
    alignSelf: center;
    width: 70%;
    height: ${sizeNormalize(35)}px;
    marginTop: ${sizeNormalize(17)}px;
`;

export default ({ }) =>
    <Wrapper>
        <Label fw='bold' fs={20} >
            Crear nueva cuenta
        </Label>

        <Logo source={logo} resizeMode='contain' />
    </Wrapper>
import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    flex: 1;
    paddingHorizontal: ${sizeNormalize(20)}px;
    marginBottom: ${sizeNormalize(10)}px;
`;

export default ({ }) =>
    <Wrapper>
        <Label fw='bold' fs={20} >
            Crear nueva cuenta
        </Label>

        <Label c={constants.primaryColor} fs={50} fw={900} mv={10} center >
            Trainerer
        </Label>
    </Wrapper>
import React from "react";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import ButtonRounded from "../../commonComponents/Button/ButtonRounded/ButtonRounded";

const Wrapper = styled.View`
    flexDirection: row;
    alignItems: center;
    paddingHorizontal: ${sizeNormalize(30)}px;
    marginBottom: 8%;
`;

export default ({ action = () => { } }) =>
    <Wrapper>
        <ButtonRounded action={action} label='Registrarme' />
    </Wrapper>
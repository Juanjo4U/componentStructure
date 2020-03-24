import React from "react";
import styled from "styled-components/native";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import Form from "./loginForm";
import ButtonCircle from "../../commonComponents/Button/ButtonCircle";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    flex: 1;
    padding: ${sizeNormalize(20)}px;
`;

const Button = styled.TouchableOpacity`
    position: absolute;
    top: -30px;
    right: 40px;
`;

export default () =>
    <Wrapper>
        <Button activeOpacity={.8}>
            <ButtonCircle icon='arrow-right' />
        </Button>
        <Label fs={20} m={10} fw='bold' >Acceder</Label>
        <Form />
        <Label c={constants.linkColor} m={15} underline>Recordar contraseña</Label>
        <Label mh={15} >¿No tienes cuenta? <Label c={constants.linkColor} underline>Registrate</Label></Label>
    </Wrapper>
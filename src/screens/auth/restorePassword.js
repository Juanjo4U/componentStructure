import React from "react";
import Wrapper from "../../components/auth/authBackWrapper";
import { Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";
import ButtonRounded from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";

export default ({ }) =>
    <Wrapper>
        <Content p={30}>
            <Label fs={20} fw='bold' >Recordar Contraseña</Label>
            <Label mv={20} fw='200' >Elige el sistema para restablecer tu contraseña</Label>
            <Content>

            </Content>
            <Content f={.3} ph={10}>
                <ButtonRounded label='Enviar' />
            </Content>
        </Content>
    </Wrapper>
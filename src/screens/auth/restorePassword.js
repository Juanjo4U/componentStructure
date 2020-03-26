import React from "react";
import Wrapper from "../../components/auth/authBackWrapper";
import { Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";
import RestorePassOptions from "../../components/auth/restorePassword/restorePassOptions";
import ButtonRounded from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";

export default ({ }) =>
    <Wrapper>
        <Content padding={20}>
            <Label fs={20} fw='bold' mh={10} >Recordar Contraseña</Label>
            <Label mv={30} fw='200' mh={10}>Elige el sistema para restablecer tu contraseña</Label>
            <RestorePassOptions/>
            <Content f={.3} ph={20}>
                <ButtonRounded label='Enviar' />
            </Content>
        </Content>
    </Wrapper>
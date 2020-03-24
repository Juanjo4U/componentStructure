import React from "react";
import Wrapper from "../../components/auth/login/Wrapper";
import LoginForm from "../../components/auth/login/loginForm";
import LoginButton from "../../components/auth/login/loginButton";
import LoginLinks from "../../components/auth/login/loginLinks";
import { Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";

export default () =>
    <Wrapper>
        <Content p={10}>
            <Label fs={20} m={10} fw='bold' >Acceder</Label>
            <LoginForm />
            <LoginButton />
            <LoginLinks />
        </Content>
    </Wrapper>
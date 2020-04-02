import React from "react";
import Wrapper from "../../components/auth/login/Wrapper";
import LoginForm from "../../components/auth/login/loginForm";
import LoginButton from "../../components/auth/login/loginButton";
import LoginLinks from "../../components/auth/login/loginLinks";
import { Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";

export default ({ navigation: { navigate } }) =>
    <Wrapper>
        <Content p={20}>
            <Label fs={20} m={11} fw='bold' >Acceder</Label>
            <LoginForm />
            <LoginButton action={() => navigate('home')} />
            <LoginLinks register={() => navigate('register')} restorePassword={() => navigate('restorePassword')} />
        </Content>
    </Wrapper>
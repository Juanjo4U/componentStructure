import React from "react";
import Wrapper from "../../components/auth/authBackWrapper";
import RegisterTitle from "../../components/auth/register/registerTitle";
import RegisterForm from "../../components/auth/register/registerForm";
import RegisterLinks from "../../components/auth/register/registerLinks";
import RegisterButton from "../../components/auth/register/registerButton";
import { Content } from "../../components/commonStyledComponents/commonStyledComponents";

import styled from "styled-components/native";

const KeyboarAvoid = styled.KeyboardAvoidingView`
    flex: 2.4;
`;

export default ({ navigation: { navigate, ...navigation } }) =>
    <Wrapper goBack={() => navigation.goBack()}>
        <Content p={20}>
            <RegisterTitle />
            <KeyboarAvoid behavior='position'>
                <RegisterForm />
            </KeyboarAvoid>
            <RegisterButton />
            <RegisterLinks logIn={() => navigate('login')} />
        </Content>
    </Wrapper>
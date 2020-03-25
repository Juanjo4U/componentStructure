import React from "react";
import Wrapper from "../../components/auth/authBackWrapper";
import SignInTitle from "../../components/auth/signIn/signInTitle";
import SignInForm from "../../components/auth/signIn/signInForm";
import SignInLinks from "../../components/auth/signIn/signInLinks";
import SignInButton from "../../components/auth/signIn/SignInButton";
import { Content } from "../../components/commonStyledComponents/commonStyledComponents";

import styled from "styled-components/native";

const KeyboarAvoid = styled.KeyboardAvoidingView`
    flex: 2.4;
`;

export default ({ }) =>
    <Wrapper>
        <Content p={20}>
            <SignInTitle />
            <KeyboarAvoid behavior='position'>
                <SignInForm />
            </KeyboarAvoid>
            <SignInButton />
            <SignInLinks />
        </Content>
    </Wrapper>
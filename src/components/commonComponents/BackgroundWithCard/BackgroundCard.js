import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
    flex: 1;
`;

const Container = styled.SafeAreaView`
    backgroundColor: white;
    width: 100%;
    height: 45%;
    borderTopLeftRadius: 40px;
    borderTopRightRadius: 40px;
    position: absolute;
    bottom: 0;
`;

export default ({ background, children }) =>
    <Wrapper>
        {background}
        <Container>
            {children}
        </Container>
    </Wrapper>
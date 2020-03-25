import React from "react";
import ButtonRounded from "./styledButtonRounded";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
    flex: 1;
`;

export default ({ label, action = () => { } }) =>
    <Wrapper onPress={action} activeOpacity={.8}>
        <ButtonRounded label={label} upperCase />
    </Wrapper>
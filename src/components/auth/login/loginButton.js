import React from "react";
import styled from "styled-components/native";
import ButtonCircle from "../../commonComponents/Button/ButtonCircle";

const Wrapper = styled.TouchableOpacity`
    position: absolute;
    top: -30px;
    right: 40px;
`;

export default ({ action = () => { } }) =>
    <Wrapper onPress={action} activeOpacity={.8}>
        <ButtonCircle icon='arrow-right' />
    </Wrapper>
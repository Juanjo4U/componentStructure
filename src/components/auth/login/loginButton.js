import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import ButtonCircle from "../../commonComponents/Button/ButtonCircle";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.TouchableOpacity`
    backgroundColor: blue;
    borderColor: ${constants.backgroundColor}
    borderWidth: ${sizeNormalize(Platform.OS === 'ios' ? 3 : 5)}px;
    borderRadius: ${sizeNormalize(50)}px;
    position: absolute;
    top: -30px;
    right: 40px;
`;

export default ({ action = () => { } }) =>
    <Wrapper onPress={action} activeOpacity={.8}>
        <ButtonCircle icon='arrow-right' />
    </Wrapper>
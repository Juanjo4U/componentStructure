import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    padding: ${sizeNormalize(12)}px;
    borderRadius: ${sizeNormalize(10)}px;
    borderWidth: .25px;
    elevation: ${sizeNormalize(Platform.OS === 'ios' ? 10 : 6)};
    shadowColor: gray;
    shadowOpacity: 0.1;
    shadowRadius: ${sizeNormalize(5)}px;
    backgroundColor: ${constants.secondaryColor};
`;

export default ({ children }) =>
    <Wrapper style={{ shadowOffset: { width: -1, height: 10 } }}>
        {children}
    </Wrapper>
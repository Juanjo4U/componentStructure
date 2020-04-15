import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    padding: ${({ p }) => p ? sizeNormalize(p) : sizeNormalize(12)}px;
    borderRadius: ${sizeNormalize(10)}px;
    borderColor: ${constants.borderGray};
    borderWidth: .5px;
    elevation: ${sizeNormalize(Platform.OS === 'ios' ? 10 : 6)};
    shadowColor: gray;
    shadowOpacity: 0.1;
    shadowRadius: ${sizeNormalize(5)}px;
    backgroundColor: ${({ bg }) => bg || constants.backgroundColor};
`;

export default ({ children, padding, color }) =>
    <Wrapper bg={color} p={padding} style={{ shadowOffset: { width: -1, height: 10 } }}>
        {children}
    </Wrapper>
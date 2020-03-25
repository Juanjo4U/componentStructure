import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    width: ${sizeNormalize(50)}px;
    height: ${sizeNormalize(50)}px;
    borderRadius: ${sizeNormalize(50)}px;
    backgroundColor: ${({ bg }) => bg || constants.primaryColor};
    justifyContent: center;
    alignItems: center;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${({ c }) => c || constants.textSecondaryColor};
    fontSize:  ${sizeNormalize(20)}px;
`;

export default ({ icon, iconColor, ButtonColor }) =>
    <Wrapper bg={ButtonColor}>
        <Icon name={icon} c={iconColor} />
    </Wrapper>
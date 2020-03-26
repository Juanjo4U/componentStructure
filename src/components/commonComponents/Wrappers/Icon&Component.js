import React from "react";
import { Content } from "../../commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

const Wrapper = styled.View`
    flex: 1;
    flexDirection: row;
`;

export const Icon = styled(FontAwesomeIcon)`
    flex: 1;
    alignSelf: center;
    fontSize: ${({ size }) => size ? sizeNormalize(size) : sizeNormalize(30)}px;
    color: ${({ c }) => c || constants.lightGrey};
`;

export default ({ icon, iconColor, iconSize, children }) =>
    <Wrapper>
        {icon && <Icon name={icon} c={iconColor} size={iconSize} />}
        <Content f={5} justifyCenter>
            {children}
        </Content>
    </Wrapper>
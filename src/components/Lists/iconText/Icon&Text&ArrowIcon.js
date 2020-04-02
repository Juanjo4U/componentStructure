import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import IconComponentWrapper from "../../commonComponents/Wrappers/Icon&Component";
import styled from "styled-components/native";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    flexDirection: row;
    width: 100%;
    padding: ${sizeNormalize(10)}px;
    height: ${sizeNormalize(40)}px;
`;

const Icon = styled(FontAwesomeIcon)`
    alignSelf: center;
    fontSize: ${({ size }) => size ? sizeNormalize(size) : sizeNormalize(12)}px;
    color: ${({ c }) => c || constants.lightGrey};
`;

export default ({ icon, label, fontSize, fontWeight }) =>
    <Wrapper>
        <Content row alignCenter>
            <Icon name={icon} c={constants.textDefaultColor} size={17} />
            <Label
                c={constants.textDefaultColor}
                fs={fontSize}
                fw={fontWeight}
                mh={10}>
                {label}
            </Label>
        </Content>
        <Icon name={constants.IconNext} />
    </Wrapper>
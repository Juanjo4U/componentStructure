import React from "react";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import ShadowBox from "../../commonComponents/Wrappers/ShadowBox";
import IconComponentWrapper from "../../commonComponents/Wrappers/Icon&Component";
import constants from "../../../utils/constants";

const Container = styled.View`
    width: 100%;
    height: ${sizeNormalize(30)}px;
    borderRadius: ${sizeNormalize(10)}px;
`;

export default ({ icon, label, color, iconLabelColor }) =>
    <ShadowBox padding={15} color={color}>
        <Container>
            <IconComponentWrapper icon={icon} iconColor={iconLabelColor} >
                {label && <Label c={iconLabelColor || constants.textThirdColor} fs={16} >{label}</Label>}
            </IconComponentWrapper>
        </Container>
    </ShadowBox>
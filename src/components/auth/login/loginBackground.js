import React from "react";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import { logoWhite as logo } from "../../../assets/logo/logo";
import Wrapper from "../authBackWrapper";
import constants from "../../../utils/constants";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";

export const Logo = styled.Image`
    marginLeft: -${sizeNormalize(18)}px;
`;

export default ({ }) =>
    <Wrapper color={constants.primaryColor}>
        <Content f={.5} center>
            <Logo source={logo} />

            <Label c={constants.textSecondaryColor} fs={19} center mv={40} mh={70}>
                Si tienes un objetivo, aquí está tu plan de entrenamiento
            </Label>
        </Content>
    </Wrapper>
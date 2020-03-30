import React from "react";
import { Label } from "../../components/commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    justifyContent: center;
`;

export default ({ navigation, route }) =>
    <Wrapper>
        <Label center >this is {route.name} screen</Label>
    </Wrapper>
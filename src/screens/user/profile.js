import React from "react";
import { SafeArea as Wrapper, Label } from "../../components/commonStyledComponents/commonStyledComponents";

export default ({ route }) =>
    <Wrapper>
        <Label>{route.name}</Label>
    </Wrapper>
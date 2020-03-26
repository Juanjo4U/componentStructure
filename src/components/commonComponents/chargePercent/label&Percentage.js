import React from "react";
import { Content, Label } from "../../commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import Charge from "./chargePercent";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    flex: 1;
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    padding: ${sizeNormalize(3)}px;
`;

export default ({ label, percentage, color }) =>
    <Wrapper>
        <Content f={2}>
            <Label fs={12}>{label}</Label>
        </Content>
        <Content f={4} p={2} justifyCenter>
            <Charge percentage={percentage} color={color} />
        </Content>
    </Wrapper>
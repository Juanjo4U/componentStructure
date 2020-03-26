import React from "react";
import styled from "styled-components/native";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || constants.lightGrey};
    borderRadius: 10px;
`;

const Charge = styled.View`
    height: 100%;
    width: ${({ w }) => w || 0}%;
    borderRadius: 10px;
    backgroundColor: ${({ bg }) => bg || 'chartreuse'};
`;

export default ({ percentage = 0, color }) =>
    <Wrapper>
        <Charge w={percentage * 100} bg={color} />
    </Wrapper>
import React from "react";
import styled from "styled-components/native";
import { screenWidth } from "../../utils/screenSize";

import { Label } from "../commonStyledComponents/commonStyledComponents";

const Wrapper = styled.View`
    width: ${screenWidth}px;
    paddingHorizontal: 15px;
`;

export default ({ item = {} }) =>
    <Wrapper>
        {item.label?.title && <Label fs={17} fw='bold' center> {item.label?.title}</Label>}
        {item.label?.text && <Label m={15} fw='100' center>{item.label?.text}</Label>}
    </Wrapper >
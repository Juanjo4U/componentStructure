import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Label } from "../commonStyledComponents/commonStyledComponents";

const screenWidth = Dimensions.get('window').width;

const Wrapper = styled.View`
    width: ${screenWidth}px;
    paddingHorizontal: 15px;
`;

export default ({ item = {} }) =>
    <Wrapper>
        {item.label?.title && <Label fs={17} fw='bold' center> {item.label?.title}</Label>}
        {item.label?.text && <Label m={15} fw='100' center>{item.label?.text}</Label>}
    </Wrapper >
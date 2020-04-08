import React from "react";
import styled from "styled-components/native";
import { screenWidth, screenHeight } from "../../utils/screenSize";

const Image = styled.Image`
    width: ${screenWidth}px;
    height: ${screenHeight * .6}px;
`;

export default ({ item = {} }) => <Image source={{ uri: item.image }} />
import React from "react";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.Image`
    alignSelf: center;
    ${({ size }) => size &&
        `
            width: ${sizeNormalize(size)}px;
            height: ${sizeNormalize(size)}px;
            borderRadius: ${sizeNormalize(size)}px;
        `
    }
`;

export default ({ image, size = 80 }) =>
    <Wrapper size={size} source={{ uri: image }} />
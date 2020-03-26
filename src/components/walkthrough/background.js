import React from "react";
import styled from "styled-components/native";
import BackgroundCard from "../commonComponents/BackgroundWithCard/BackgroundCard";

const Image = styled.Image`
    flex: .6;
`;

export default ({ uri, children }) =>
    <BackgroundCard
        background={<Image source={{ uri }} />}
    >
        {children}
    </BackgroundCard>
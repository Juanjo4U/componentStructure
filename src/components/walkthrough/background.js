import React from "react";
import styled from "styled-components/native";
import BackgroundCard from "../commonComponents/BackgroundWithCard/BackgroundCard";

const Image = styled.ImageBackground`
    flex: 1;
`;

export default ({ uri, children }) =>
    <BackgroundCard
        background={<Image source={{ uri }} />}
    >
        {children}
    </BackgroundCard>
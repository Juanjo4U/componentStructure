import React from "react";
import BackgroundCard from "../../commonComponents/BackgroundWithCard/BackgroundCard";
import Background from "./loginBackground";

export default ({ children }) =>
    <BackgroundCard background={<Background />} >
        {children}
    </BackgroundCard>
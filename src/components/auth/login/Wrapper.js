import React from "react";
import BackgroundCard from "../../commonComponents/BackgroundWithCard/BackgroundCard";
import Background from "./loginBackground";

export default ({ children, goBack }) =>
    <BackgroundCard background={<Background goBack={goBack} />} >
        {children}
    </BackgroundCard>
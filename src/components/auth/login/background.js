import React from "react";
import BackgroundCard from "../../commonComponents/BackgroundWithCard/BackgroundCard";
import Background from "./topCard";
import Card from "./bottomCard";


export default () =>
    <BackgroundCard background={<Background />} >
        <Card />
    </BackgroundCard>
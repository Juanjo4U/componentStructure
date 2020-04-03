import React from "react";
import { Content as Wrapper } from "../../commonStyledComponents/commonStyledComponents";
import Option from "../../Lists/listsWithNavigation/iconText&arrowIconList";
import options from "./options";

export default ({ }) =>
    <Wrapper>
        <Option Choices={options.athleteData} />
        <Option Choices={options.connections} />
        <Option Choices={options.settings} />
    </Wrapper>
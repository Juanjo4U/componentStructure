import React from "react";
import { Content as Wrapper } from "../../commonStyledComponents/commonStyledComponents";
import Options from "../../Lists/listsWithNavigation/iconText&arrowIconList";
import options from "./options";

export default ({ }) =>
    <Wrapper>
        <Options Choices={options.athleteData} whiteSpaceBottom={100} />
    </Wrapper>
import React from "react";
import Wrapper from "../../../components/commonComponents/Wrappers/backWrapper";
import { Scroll } from "../../../components/commonStyledComponents/commonStyledComponents";
import MoreOptions from "../../../components/botttomScreenComponents/more/moreOptions";

export default ({ }) =>
    <Wrapper>
        <Scroll contentContainerStyle={{ paddingHorizontal: 20 }}>
            <MoreOptions />
        </Scroll>
    </Wrapper>
import React from "react";
import { Content as Wrapper } from "../commonStyledComponents/commonStyledComponents";
import List from "../Lists/iconText/iconTextList";

import hardCodes from "../../utils/hardCodes";

const { customizeOptions } = hardCodes;

export default ({ }) =>
    <Wrapper>
        <List choices={customizeOptions} />
    </Wrapper>
import React from "react";
import { Content as Wrapper } from "../../../components/commonStyledComponents/commonStyledComponents";
import RecordList from "../../../components/botttomScreenComponents/record/recordList";
import constants from "../../../utils/constants";

export default () =>
    <Wrapper bg={constants.backgroundColor}>
        <RecordList />
    </Wrapper>
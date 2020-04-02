import React from "react";
import { SafeArea as Wrapper } from "../../components/commonStyledComponents/commonStyledComponents";
import RecordList from "../../components/record/recordList";
import constants from "../../utils/constants";

export default () =>
    <Wrapper bg={constants.backgroundColor}>
        <RecordList />
    </Wrapper>
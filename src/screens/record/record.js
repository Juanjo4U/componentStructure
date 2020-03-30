import React from "react";
import styled from "styled-components/native";
import RecordList from "../../components/record/recordList";
import constants from "../../utils/constants";

const Wrapper = styled.SafeAreaView`
    flex: ${({ f }) => f || 1};
    backgroundColor: ${({ bg }) => bg || constants.secondaryColor};
`;

export default () =>
    <Wrapper>
        <RecordList />
    </Wrapper>
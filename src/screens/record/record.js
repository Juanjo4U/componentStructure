import React from "react";
import styled from "styled-components/native";
import RecordList from "../../components/record/recordList";

const Wrapper = styled.SafeAreaView`
    flex: ${({ f }) => f || 1};
    ${({ bg }) => bg && 'backgroundColor: white'};
`;

export default () =>
    <Wrapper>
        <RecordList />
    </Wrapper>
import React from "react";
import { Platform, SafeAreaView } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import styled from "styled-components/native";
import RecordList from "../../components/record/recordList";
import constants from "../../utils/constants";

const Wrapper = styled(Platform.OS === 'ios' ? SafeAreaView : SafeAreaViewAndroid)`
    flex: ${({ f }) => f || 1};
    backgroundColor: ${({ bg }) => bg || constants.secondaryColor};
`;

export default () =>
    <Wrapper>
        <RecordList />
    </Wrapper>
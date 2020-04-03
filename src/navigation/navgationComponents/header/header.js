import React from "react";
import { Platform, SafeAreaView } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import Chat from "../../../components/chat/chat";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";
import logo from "../../../assets/logo/logo"
import Option from "../../../components/commonComponents/Button/ButtonIconText/ButtonIconText";
import styled from "styled-components/native";

const SafeArea = styled(Platform.OS === 'ios' ? SafeAreaView : SafeAreaViewAndroid)`
    backgroundColor: ${constants.backgroundColor};
`;


const Wrapper = styled.View`
    backgroundColor: ${constants.backgroundColor};
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(50)}px;
`;

const LogoButton = styled.TouchableOpacity``;

const Logo = styled.Image``;

export default ({ navigation }) =>
    <SafeArea>
        <Wrapper>
            <Option
                icon={'bars'}
                action={navigation.openDrawer}
            />
            <LogoButton activeOpacity={.8}>
                <Logo source={logo} resizeMode='contain' />
            </LogoButton>
            <Chat />
        </Wrapper>
    </SafeArea>

import React from "react";
import Chat from "../../../components/chat/chat";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";
import logo from "../../../assets/logo/logo"
import Option from "../../../components/commonComponents/Button/ButtonIconText/ButtonIconText";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/commonStyledComponents/commonStyledComponents";

const Wrapper = styled.View`
    backgroundColor: ${constants.inactiveColor};
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(50)};
`;

const LogoButton = styled.TouchableOpacity``;

const Logo = styled.Image``;

export default ({ isDrawerOpen, toggleDrawer, goHome }) =>
    <SafeArea bg={constants.backgroundColor}>
        <Wrapper>
            <Option
                icon={'bars'}
                action={toggleDrawer}
            />
            <LogoButton onPress={goHome} activeOpacity={.8}>
                <Logo source={logo} resizeMode='contain' />
            </LogoButton>
            <Chat />
        </Wrapper>
    </SafeArea>

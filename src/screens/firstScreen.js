import React from "react";
import { Platform } from "react-native";
import { logoWhite as logo } from "../assets/logo/logo";
import styled from "styled-components/native";
import { Content } from "../components/commonStyledComponents/commonStyledComponents";
import constants from "../utils/constants";
import { sizeNormalize } from "../utils/adaptSizes";
import { screenHeight } from "../utils/screenSize";

const Wrapper = styled.TouchableWithoutFeedback`
    flex: 1;
`;

export const Logo = styled.Image`
    marginLeft: -${sizeNormalize(18)}px;
    marginBottom: ${sizeNormalize((screenHeight / 3.6))}px;
`;

export default ({ navigation: { navigate } }) => {
    const goToNextScreen = () => navigate('auth')
    return (
        <Wrapper onPress={goToNextScreen}>
            <Content bg={constants.backgroundColor} justifyCenter>
                <Content f={Platform.OS === 'ios' ? .93 : 96} bg={constants.primaryColor} center >
                    <Logo source={logo} />
                </Content>
            </Content>
        </Wrapper>
    )
}
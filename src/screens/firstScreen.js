import React from "react";
import logo from "../assets/logo/logo";
import styled from "styled-components/native";
import { Content } from "../components/commonStyledComponents/commonStyledComponents";
import constants from "../utils/constants";
import { sizeNormalize } from "../utils/adaptSizes";
import { screenHeight } from "../utils/screenSize";

const Wrapper = styled.TouchableWithoutFeedback`
    flex: 1;
`;

export const Logo = styled.Image`
    marginBottom: ${sizeNormalize((screenHeight / 2) / 3)}px;
`;

export default ({ navigation: { navigate } }) => {
    const goToNextScreen = () => navigate('auth')
    React.useEffect(() => {
        setTimeout(goToNextScreen, 3000);
    }, [])
    return (
        <Wrapper onPress={goToNextScreen}>
            <Content bg={constants.backgroundColor} justifyCenter>
                <Content f={.93} bg={'#EB4185'} center >
                    <Logo source={logo} />
                </Content>
            </Content>
        </Wrapper>
    )
}
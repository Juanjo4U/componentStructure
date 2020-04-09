import React from "react";
import { StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { SafeArea as Wrapper, Content } from "../commonStyledComponents/commonStyledComponents";
import ButtonCircle from "../commonComponents/Button/ButtonCircle";
import constants from "../../utils/constants";
import { sizeNormalize } from "../../utils/adaptSizes";

const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: ${sizeNormalize(Platform.OS === 'ios' ? 0 : -10)}px;
`;

export default ({ children, color }) => {
    const { goBack } = useNavigation();
    return (
        <Wrapper bg={color || constants.backgroundColor} >
            <StatusBar hidden={Platform.OS === 'android' ? false : true} />
            <Content f={.1} row>
                <Button onPress={() => goBack()} activeOpacity={.8}>
                    <ButtonCircle
                        ButtonColor={color || constants.secondaryColor}
                        icon={constants.IconBack}
                        iconColor={color ? constants.textSecondaryColor : constants.textDefaultColor} />
                </Button>
            </Content>
            <Content >
                {children}
            </Content>
        </Wrapper>
    )
}
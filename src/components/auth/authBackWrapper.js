import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Content } from "../commonStyledComponents/commonStyledComponents";
import ButtonCircle from "../commonComponents/Button/ButtonCircle";
import constants from "../../utils/constants";
import { sizeNormalize } from "../../utils/adaptSizes";

const Wrapper = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || constants.backgroundColor};
`;

const Header = styled.View`
    flex: .1;
    flexDirection: row;
`;

const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: ${sizeNormalize(Platform.OS === 'ios' ? 0 : -10)}px;
`;

export default ({ children, color }) => {
    const navigation = useNavigation();
    return (
        <Wrapper bg={color} >
            <StatusBar hidden={Platform.OS === 'ios' ? true : false} />
            <Header>
                <Button onPress={() => navigation.goBack()} activeOpacity={.8}>
                    <ButtonCircle
                        ButtonColor={color || constants.secondaryColor}
                        icon={constants.IconBack}
                        iconColor={color ? constants.textSecondaryColor : constants.textDefaultColor} />
                </Button>
            </Header>
            <Content >
                {children}
            </Content>
        </Wrapper>
    )
}
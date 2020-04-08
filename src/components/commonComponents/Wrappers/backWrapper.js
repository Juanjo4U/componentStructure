import React from "react";
import { Platform, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { Content, Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Header = styled.View`
    flex: .1;
`;

const Button = styled.TouchableOpacity`
    flexDirection: row;
    alignItems: center;
    padding: ${sizeNormalize(10)}px;
    position: absolute;
    left: ${sizeNormalize(5)}px;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${({ c }) => c || constants.textDefaultColor};
    fontSize: ${({ fs }) => fs ? sizeNormalize(fs) : sizeNormalize(17)}px;
    paddingVertical: ${sizeNormalize(5)}px;
`;

export default ({ children, RouteNameHidden }) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <Content bg={constants.backgroundColor} >
            <Header>
                <Button onPress={() => navigation.goBack()} activeOpacity={.8}>
                    <Icon name={constants.IconBack} c={constants.textDefaultColor} />
                    {!RouteNameHidden &&
                        <Label
                            c={constants.textDefaultColor}
                            fw='bold'
                            mh={7}>
                            {route.name[0].toUpperCase() + route.name.slice(1)}
                        </Label>
                    }
                </Button>
            </Header>
            <Content>
                {children}
            </Content>
        </Content >
    )
}
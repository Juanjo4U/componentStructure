import React from "react";
import { Platform, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { SafeArea as Wrapper, Content, Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Header = styled.View`
    flex: .1;
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    flexDirection: row;
    padding: ${sizeNormalize(10)}px;
    alignItems: center;
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
        <Wrapper bg={constants.backgroundColor} >
            <Header>
                <Button onPress={() => navigation.goBack()} activeOpacity={.8}>
                    <Icon name={constants.IconBack} c={constants.textDefaultColor} />
                    {!RouteNameHidden &&
                        <Label
                            c={constants.textDefaultColor}
                            fw='bold'
                            mh={7}>
                            {route.name}
                        </Label>
                    }
                </Button>
            </Header>
            <Content>
                {children}
            </Content>
        </Wrapper >
    )
}
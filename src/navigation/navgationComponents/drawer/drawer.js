import React from "react";
import logo from "../../../assets/logo/logo";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";
import styled from "styled-components/native";
import { Label } from "../../../components/commonStyledComponents/commonStyledComponents";
import Button from "../../../components/commonComponents/Button/ButtonIconText/ButtonIconText";
import options from "./drawerOptions";
import hardCodes from "../../../utils/hardCodes";

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${constants.backgroundColor};
`;

const Header = styled.View`
    alignItems: center;
    flexDirection: row;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(50)}px;
`;

const Logo = styled.Image``;

const ScrollView = styled.ScrollView``;

const AthleteInfo = styled.View`
    backgroundColor: ${constants.primaryColor};
    justifyContent: space-evenly;
    alignItems: center;
    height: ${props => props.height ? sizeNormalize(props.height) : sizeNormalize(200)}px;
    marginBottom: ${sizeNormalize(10)}px;
`;

const Picture = styled.Image`
    width: ${sizeNormalize(100)}px;
    height: ${sizeNormalize(100)}px;
    borderRadius: 100px;
`;

const AthleteData = styled.View`
    justifyContent: space-around;
    alignItems: center;
    height: ${sizeNormalize(60)}px;
`;

const { list } = hardCodes;

const defaultAthlete = {
    shortname: 'Nombre Deportista',
    picture: list[2].image
}

export default ({ navigation, athlete = defaultAthlete, isDrawerOpen = true, toggleDrawer, navigate, logOut, toggleModal }) =>
    <SafeAreaView>
        <Header>
            <Button
                icon={isDrawerOpen ? 'times' : 'bars'}
                action={navigation.closeDrawer}
            />
            <Logo source={logo} resizeMode='contain' />
        </Header>
        <ScrollView>
            <AthleteInfo>
                <Picture source={{ uri: athlete.picture }} />
                <AthleteData>
                    <Label c='white' fs={18} >{athlete.shortname}</Label>
                    {athlete.sport && <Label c='white' fs={13} >{athlete.sport.name.toUpperCase()}</Label>}
                </AthleteData>
            </AthleteInfo>

            {options.map((option, index) =>
                <Button key={index}
                    label={option.label}
                    icon={option.icon}
                    action={() => option.action && option.action(navigate, logOut, toggleModal)}
                    style={option.style}
                />
            )}

        </ScrollView>
    </SafeAreaView>

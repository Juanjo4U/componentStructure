import React from "react";
import logo from "../../../assets/logo/logo";
import constants from "../../../utils/constants";
import { sizeNormalize } from "../../../utils/adaptSizes";
import styled from "styled-components/native";
import { Label } from "../../../components/commonStyledComponents/commonStyledComponents";
import Button from "../../../components/commonComponents/Button/ButtonIconText/ButtonIconText";
import options from "./drawerOptions";

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${constants.drawerColor};
`;

const Header = styled.View`
    alignItems: center;
    flexDirection: row;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(50)};
`;

const Logo = styled.Image``;

const ScrollView = styled.ScrollView``;

const AthleteInfo = styled.View`
    backgroundColor: ${constants.primaryColor};
    justifyContent: space-evenly;
    alignItems: center;
    height: ${props => props.height ? sizeNormalize(props.height) : sizeNormalize(200)};
    marginBottom: ${sizeNormalize(10)}
`;

const Picture = styled.Image`
    width: ${sizeNormalize(100)};
    height: ${sizeNormalize(100)};
    borderRadius: 100;
`;

const AthleteData = styled.View`
    justifyContent: space-around;
    alignItems: center;
    height: ${sizeNormalize(60)};
`;

export default ({ athlete = {}, isDrawerOpen, toggleDrawer, navigate, logOut, toggleModal }) =>
    <SafeAreaView>
        <Header>
            <Button
                icon={isDrawerOpen ? 'times' : 'bars'}
                action={toggleDrawer}
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
                    label={option.label && T.t(option.label)}
                    icon={option.icon}
                    action={() => option.action && option.action(navigate, logOut, toggleModal)}
                    style={option.style}
                />
            )}

        </ScrollView>
    </SafeAreaView>

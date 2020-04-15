import React from "react";
import { Platform } from "react-native";
import { SafeArea as Wrapper, Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";
import GoalSelector from "../../components/customize/goalSelector";
import ButtonRounded from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";
import constants from "../../utils/constants";

export default ({ navigation: { navigate } }) =>
    <Wrapper bg={constants.backgroundColor}>
        <Label mv={Platform.OS === 'ios' ? 10 : 30} fw='bold' fs={18} center>¿Cuál es tu objetivo?</Label>
        <GoalSelector />
        <Content f={.1} pv={15} ph={50}>
            <ButtonRounded label='Continuar' action={() => navigate('bottom')} />
        </Content>
        <Label onPress={() => navigate('bottom')} m={10} center c={constants.textThirdColor} >Omitir</Label>
    </Wrapper>
import React from "react";
import { Platform } from "react-native";
import { Content, Label } from "../../components/commonStyledComponents/commonStyledComponents";
import styled from "styled-components/native";
import GoalSelector from "../../components/customize/goalSelector";
import ButtonRounded from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";
import constants from "../../utils/constants";

const Wrapper = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || constants.secondaryColor};
`;

export default ({ }) =>
    <Wrapper>
        <Label mv={Platform.OS === 'ios' ? 10 : 30} fw='bold' center>¿Cuál es tu objetivo?</Label>
        <GoalSelector />
        <Content f={.1} pv={15} ph={50}>
            <ButtonRounded label='Continuar' />
        </Content>
        <Label m={10} center c={constants.textThirdColor} >Omitir</Label>
    </Wrapper>
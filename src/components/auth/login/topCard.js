import React from "react";
import styled from "styled-components/native";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";

const Wrapper = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${constants.primaryColor};
`;

export default ({ }) =>
    <Wrapper>
        <Content f={.5} center>
            <Label c='white' fw={900} fs={55} >Trainerer</Label>
            <Label c='white' fs={25} center m={50}>Si tienes un objetivo, nosotros tenemos tu plan de entrenamiento</Label>
        </Content>
    </Wrapper>
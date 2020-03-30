import React from "react";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import Wrapper from "../authBackWrapper";
import constants from "../../../utils/constants";

export default ({ goBack }) =>
    <Wrapper goBack={goBack} color={constants.primaryColor}>
        <Content f={.5} center>
            <Label c={constants.textSecondaryColor} fw={900} fs={50} >
                Trainerer
            </Label>

            <Label c={constants.textSecondaryColor} fs={20} center m={40}>
                Si tienes un objetivo, nosotros tenemos tu plan de entrenamiento
            </Label>
        </Content>
    </Wrapper>
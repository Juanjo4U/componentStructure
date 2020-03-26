import React from "react";
import styled from "styled-components/native";
import Options from "../../Lists/iconText/iconDoubleTextList";

import hardCodes from "../../../utils/hardCodes";

const { restorePassworMethods } = hardCodes;

const Wrapper = styled.View`
    flex: 1;
`;

export default ({ }) =>
    <Wrapper>
        <Options choices={restorePassworMethods} />
    </Wrapper>
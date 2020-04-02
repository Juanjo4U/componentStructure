import React from "react";
import styled from "styled-components/native";
import Option from "./Options";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    flex: 1;
`;

const options = {
    athleteData: [
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
    ],
    connections: [
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        }
    ],
    settings: [
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
        {
            icon: 'user',
            label: 'Datos personales',
            action: () => { }
        },
    ],
}

export default ({ }) =>
    <Wrapper>
        <Option Choices={options.athleteData} />
        <Option Choices={options.connections} />
        <Option Choices={options.settings} />
    </Wrapper>
import React, { useState } from "react";
import styled from "styled-components/native";
import CardList from "../Lists/card/cardList";
import Tabs from "./recorListTabs";

import hardCodes from "../../utils/hardCodes";
const { list, sports } = hardCodes;

const Wrapper = styled.View`
    flex: 1;
`;

const filter = choice => {
    if (choice) return list.filter(item => item.id.label === choice)
    else return list
}

export default () => {

    const [choices, setChoices] = useState(list);

    const getChoice = choice => setChoices(filter(choice))

    return (
        <Wrapper>
            <Tabs choices={sports} getSelected={getChoice} />
            <CardList choices={choices} />
        </Wrapper>
    )
}
import React from "react";
import styled from "styled-components/native";
import hardCodes from "../../utils/hardCodes";
import CardList from "../Lists/card/cardList";

const { list } = hardCodes;

const Wrapper = styled.View`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || 'lightgray'};
`;

export default () =>
    <Wrapper>
        <CardList choices={list} />
    </Wrapper>
import React from "react";
import styled from "styled-components/native";
import hardCodes from "../../utils/hardCodes";
import Card from "../Lists/card";

const { list } = hardCodes;

const Wrapper = styled.View`
    flex: 1;
    backgroundColor: ${({ bg }) => bg || 'lightgray'};
`;

const Scroll = styled.ScrollView``;

const Button = styled.TouchableOpacity``;

export default () =>
    <Wrapper>
        <Scroll contentContainerStyle={{ padding: 15 }} >
            {list.map((item, index) =>
                <Button key={index} activeOpacity={.7}>
                    <Card
                        image={item.image}
                        id={item.id}
                        label={item.label}
                    />
                </Button>
            )}
        </Scroll>
    </Wrapper>
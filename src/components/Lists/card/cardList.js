import React from "react";
import styled from "styled-components/native";
import Card from "./card";

const Wrapper = styled.View`
    flex: 1;
    backgroundColor: ghostwhite ;
`;

const Scroll = styled.ScrollView``;

const Button = styled.TouchableOpacity``;

export default ({ choices }) =>
    <Wrapper>
        <Scroll contentContainerStyle={{ padding: 15 }} >
            {choices.map((item, index) =>
                <Button key={index} activeOpacity={.7}>
                    <Card
                        image={item.image}
                        id={item.id}
                        label={item.label}
                        activity={item.activity}
                    />
                </Button>
            )}
        </Scroll>
    </Wrapper>
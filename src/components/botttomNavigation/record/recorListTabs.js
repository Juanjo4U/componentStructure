import React, { useState } from "react";
import styled from "styled-components/native";
import Option from "./recordListOption";

const Wrapper = styled.View`
    flex: .1;
`;

const Scroll = styled.ScrollView``;

const Button = styled.TouchableOpacity``;

export default ({ choices, getSelected = () => { } }) => {
    const [selected, setSelected] = useState();
    const onPress = selection => {
        setSelected(selection)
        getSelected(selection)
    }
    return (
        <Wrapper>
            <Scroll horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: 10 }} >
                <Button onPress={() => onPress(null)} >
                    <Option label='Todo' isActive={!selected ? true : false} />
                </Button>
                {choices.map((item) =>
                    <Button onPress={() => onPress(item.label)}
                        key={item.label}
                    >
                        <Option label={item.label} isActive={selected === item.label} />
                    </Button>
                )}
            </Scroll>
        </Wrapper>
    )
}
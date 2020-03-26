import React, { useState } from "react";
import { Content as Wrapper } from "../../commonStyledComponents/commonStyledComponents";
import IconText from "./IconText";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Scroll = styled.ScrollView``;

const Button = styled.TouchableOpacity`
    marginBottom: ${sizeNormalize(15)}px;
`;

export default ({ choices, fontWeight }) => {

    const [selected, setSelected] = useState();

    const onPress = (index) => {
        setSelected(index)
    }

    return (
        <Wrapper>
            <Scroll contentContainerStyle={{ padding: 15 }} >
                {choices.map((item, index) =>
                    <Button key={index} onPress={() => onPress(index)} >
                        <IconText
                            color={selected === index ? constants.pickerSelected : null}
                            title={item.title}
                            icon={item.icon}
                            label={item.label}
                            fontWeight='bold'
                            fontSize={15.5}
                            iconLabelColor={selected === index ? constants.textSecondaryColor : null}
                        />
                    </Button>
                )}
            </Scroll>
        </Wrapper>
    )
}
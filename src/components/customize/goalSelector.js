import React, { useState } from "react";
import { Content as Wrapper } from "../commonStyledComponents/commonStyledComponents";
import IconText from "../Lists/IconText";
import styled from "styled-components/native";

import hardCodes from "../../utils/hardCodes";
import { sizeNormalize } from "../../utils/adaptSizes";
import constants from "../../utils/constants";

const { customizeOptions } = hardCodes;

const Scroll = styled.ScrollView``;

const Button = styled.TouchableOpacity`
    marginBottom: ${sizeNormalize(15)}px;
`;

export default ({ }) => {

    const [selected, setSelected] = useState();

    const onPress = (index) => {
        setSelected(index)
    }

    return (
        <Wrapper>
            <Scroll contentContainerStyle={{ padding: 15 }} >
                {customizeOptions.map((item, index) =>
                    <Button key={index} onPress={() => onPress(index)} >
                        <IconText
                            color={selected === index ? constants.pickerSelected : null}
                            iconLabelColor={selected === index ? constants.textSecondaryColor : null}
                            icon={item.icon}
                            label={item.label}
                        />
                    </Button>
                )}
            </Scroll>
        </Wrapper>
    )
}
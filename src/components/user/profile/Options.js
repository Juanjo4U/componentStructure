import React from "react";
import styled from "styled-components/native";
import ShadowBox from "../../commonComponents/Wrappers/ShadowBox";
import Option from "../../Lists/iconText/Icon&Text&ArrowIcon";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    width: 100%;
    marginVertical: ${sizeNormalize(10)}px;
`;

const Button = styled.TouchableOpacity`
    ${({ border }) => border && `borderBottomWidth: .25px;`}
    borderBottomColor: lightgray;
`;

export default ({ Choices = [] }) =>
    <Wrapper>
        <ShadowBox padding={0.1}>
            {Choices.map((item, index) =>
                <Button key={index} onPress={item.action}
                    border={Choices.length - 1 != index}
                >
                    <Option icon={item.icon} label={item.label} fontSize={13} />
                </Button>
            )}
        </ShadowBox>
    </Wrapper>
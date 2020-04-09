import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ShadowBox from "../../commonComponents/Wrappers/ShadowBox";
import Option from "../../Lists/iconText/Icon&Text&ArrowIcon";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    width: 100%;
    marginVertical: 10px;
`;

const Button = styled.TouchableOpacity`
    ${({ border }) => border && `borderBottomWidth: .25px;`}
    borderBottomColor: lightgray;
`;

const WhiteSpace = styled.View`
    ${({ h }) => h && `height: ${sizeNormalize(h)}px;`}
`;

export default ({ Choices = [], whiteSpaceBottom }) => {
    const { navigate } = useNavigation();
    return (
        <Wrapper>
            <ShadowBox padding={0.1}>
                {Choices.map((item, index) =>
                    <Button key={index} onPress={() => item.action(navigate)}
                        border={Choices.length - 1 != index}
                    >
                        <Option icon={item.icon} label={item.label} fontSize={13} />
                    </Button>
                )}
                {whiteSpaceBottom && <WhiteSpace h={whiteSpaceBottom} />}
            </ShadowBox>
        </Wrapper>
    )
}
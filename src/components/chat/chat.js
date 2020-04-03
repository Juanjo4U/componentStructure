import React from "react";
import Button from "../commonComponents/Button/ButtonIconText/ButtonIconText";
import styled from "styled-components/native";
import { sizeNormalize } from "../../utils/adaptSizes";

const Wrapper = styled.View`
    position: relative;
`;

const Notification = styled.View`
    backgroundColor: red;
    width: ${sizeNormalize(8)};
    height: ${sizeNormalize(8)};
    borderRadius: ${sizeNormalize(8)};
    position: absolute;
    bottom: ${sizeNormalize(7)};
    right: ${sizeNormalize(13)};
`;

export default ({ openChat, unReadMessages }) =>
    <Wrapper>
        <Button
            icon='comment'
            action={openChat}
        />
        {unReadMessages ? <Notification /> : null}
    </Wrapper>

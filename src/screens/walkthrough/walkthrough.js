import React, { useState } from "react";
import ButtonRounded from "../../components/commonComponents/Button/ButtonRounded";
import Background from "../../components/walkthrough/background";
import Indicator from "../../components/walkthrough/indicator";
import Slider from "../../components/walkthrough/slider";
import styled from "styled-components/native";

import hardCodes from "../../utils/hardCodes";
const { list } = hardCodes;

const Button = styled.TouchableOpacity`
    flex: .7;
    paddingHorizontal: 30px;
`;

export default () => {
    const [activeView, setActiveView] = useState({
        index: 0,
        image: 'https://www.tom-archer.com/wp-content/uploads/2018/04/2--masai-at-sunset-serengeti.jpg'
    })

    const onViewChange = (obj = {}) => {
        setActiveView({
            index: obj.viewableItems[0]?.index,
            image: obj.viewableItems[0]?.item?.image
        })
    }

    return (
        <Background uri={activeView.image}>
            <Indicator items={list} active={activeView.index} />
            <Slider items={list} onViewChange={onViewChange} />
            <Button>
                <ButtonRounded label='testing' upperCase />
            </Button>
        </Background>
    )
}
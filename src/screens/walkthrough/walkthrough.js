import React, { useState } from "react";
import { Content } from "../../components/commonStyledComponents/commonStyledComponents";
import WalkthroughButton from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";
import Background from "../../components/walkthrough/background";
import Indicator from "../../components/walkthrough/indicator";
import Slider from "../../components/walkthrough/slider";

import hardCodes from "../../utils/hardCodes";
const { list } = hardCodes;

export default ({ navigation: { navigate } }) => {
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
            <Indicator items={list.slice(0, 3)} active={activeView.index} />
            <Slider items={list.slice(0, 3)} onViewChange={onViewChange} />
            <Content f={.7} ph={30}>
                <WalkthroughButton label='Empezar' action={() => navigate('login')} />
            </Content>
        </Background>
    )
}
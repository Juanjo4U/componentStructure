import React, { useState } from "react";
import { Content } from "../../components/commonStyledComponents/commonStyledComponents";
import Wrapper from "../../components/commonComponents/BackgroundWithCard/BackgroundCard";
import Slider from "../../components/walkthrough/slider";
import WalkthroughImage from "../../components/walkthrough/walkthroughImage";
import WalkthroughContent from "../../components/walkthrough/walkthroughContent";
import WalkthroughIndicator from "../../components/walkthrough/indicator";
import WalkthroughButton from "../../components/commonComponents/Button/ButtonRounded/ButtonRounded";

import { items } from "./walkthroughSliderItems";

export default ({ navigation: { navigate } }) => {
    const [activeView, setActiveView] = useState(0);
    const onViewChange = (obj = {}) => setActiveView(obj.viewableItems[0]?.index)
    return (
        <Wrapper
            background={
                <Slider component={WalkthroughImage}
                    items={items}
                    activeItemIndex={activeView}
                    onViewChange={onViewChange} />
            }
        >
            <WalkthroughIndicator items={items} activeItemIndex={activeView} />
            <Slider component={WalkthroughContent}
                items={items}
                activeItemIndex={activeView}
                onViewChange={onViewChange} />
            <Content f={.7} ph={30}>
                <WalkthroughButton label='Empezar' action={() => navigate('login')} />
            </Content>
        </Wrapper>
    )
}
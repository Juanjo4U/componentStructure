import React, { useEffect, useState, useRef } from "react";
import { getItemWidthLayout } from "../../utils/flatList-ItemsLayouts";
import styled from "styled-components/native";

const FlatList = styled.FlatList`
    flex: 1;
`;

export default ({ items, activeItemIndex = 0, onViewChange = () => { }, component }) => {

    const flatList = useRef();

    const [activeView, setActiveView] = useState({
        viewableItems: [{ index: 0 }]
    })

    useEffect(() => {
        onViewChange(activeView)
    }, [activeView])

    useEffect(() => {
        flatList.current.scrollToItem({
            animated: false,
            item: items[activeItemIndex]
        })
    }, [activeItemIndex])

    return (
        <FlatList ref={flatList}
            data={items}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={component}
            keyExtractor={(_, index) => `${index}`}
            onViewableItemsChanged={setActiveView}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
            }}
            getItemLayout={getItemWidthLayout}
        />
    )
}
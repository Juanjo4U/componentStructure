import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ContentCard from "./walkthroughContent";

const FlatList = styled.FlatList`
    flex: 1;
`;

export default ({ items, onViewChange = () => { } }) => {
    const [active, setActive] = useState({
        viewableItems: []
    })

    useEffect(() => {
        onViewChange(active)
    }, [active])
    return (
        <FlatList data={items}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={ContentCard}
            keyExtractor={(_, index) => `${index}`}
            onViewableItemsChanged={setActive}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
            }}
        />
    )
}
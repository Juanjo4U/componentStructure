import { screenHeight, screenWidth } from "./screenSize";

export const getItemWidthLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index
})

export const getItemHeightLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index
})
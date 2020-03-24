import { Platform, PixelRatio } from 'react-native'
import { screenWidth } from "./screenSize";

const scale = screenWidth / 320

export const sizeNormalize = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios')
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    else
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

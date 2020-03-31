import React, { useState, useEffect } from "react";
import { Animated, Keyboard, Platform } from "react-native";
import styled from "styled-components/native";
import { screenHeight } from "../../../utils/screenSize";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    flex: 1;
`;

const Container = styled.SafeAreaView`
    backgroundColor: ${constants.backgroundColor};
    width: 100%;
    height: 45%;
    borderTopLeftRadius: ${sizeNormalize(25)}px;
    borderTopRightRadius: ${sizeNormalize(25)}px;
    position: absolute;
    bottom: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export default ({ background, children }) => {
    const initialValue = screenHeight * 0.47;
    const finalValue = screenHeight * (Platform.OS === 'android' ? 0.8 : 0.7);
    const [AnimatedValue] = useState(new Animated.Value(initialValue));

    const animation = value => {
        Animated.timing(AnimatedValue, {
            toValue: value,
            duration: 350,
        }).start()
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => animation(finalValue))
        Keyboard.addListener('keyboardDidHide', () => animation(initialValue))
        return () => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidHide");
        }
    }, [])

    return (
        <Wrapper>
            {background}
            <AnimatedContainer style={{ height: AnimatedValue }}>
                {children}
            </AnimatedContainer>
        </Wrapper>
    )
}
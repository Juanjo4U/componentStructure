import { sizeNormalize } from "../../utils/adaptSizes";
import styled from "styled-components/native";
import constants from "../../utils/constants";

export const Label = styled.Text`
    color: ${({ c }) => c || constants.textDefaultColor};
    fontSize: ${({ fs }) => fs ? sizeNormalize(fs) : sizeNormalize(14)}px;
    ${({ fw }) => fw && `fontWeight: ${fw};`}
    ${({ center }) => center && `textAlign: center`}
    ${({ m }) => m && `margin: ${sizeNormalize(m)}px;`}
    ${({ mh }) => mh && `marginHorizontal: ${sizeNormalize(mh)}px;`}
    ${({ mv }) => mv && `marginVertical: ${sizeNormalize(mv)}px;`}
    ${({ c, underline }) => underline && `
        textDecorationLine: underline;
        textDecorationStyle: solid;
        textDecorationColor: ${c || constants.textDefaultColor};
    `}
`;

export const Content = styled.View`
    flex: ${({ f }) => f || 1};
    ${({ br }) => br && `borderRadius: 10px;`}
    ${({ p }) => p && `padding: ${p}px;`}
    ${({ bg }) => bg && `backgroundColor: ${bg};`}
    ${({ center }) => center && `justifyContent: center; alignItems: center;`}
    position: relative;
`;
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
    ${({ p }) => p && `padding: ${p}px;`}
    ${({ ph }) => ph && `paddingHorizontal: ${sizeNormalize(ph)}px;`}
    ${({ pv }) => pv && `paddingVertical: ${sizeNormalize(pv)}px;`}
    ${({ c, underline }) => underline && `
        textDecorationLine: underline;
        textDecorationStyle: solid;
        textDecorationColor: ${c || constants.textDefaultColor};
    `}
`;

export const Content = styled.View`
    flex: ${({ f }) => f || 1};
    ${({ br }) => br && `borderRadius: 10px;`}
    ${({ m }) => m && `margin: ${sizeNormalize(m)}px;`}
    ${({ mh }) => mh && `marginHorizontal: ${sizeNormalize(mh)}px;`}
    ${({ mv }) => mv && `marginVertical: ${sizeNormalize(mv)}px;`}
    ${({ p }) => p && `padding: ${p}px;`}
    ${({ ph }) => ph && `paddingHorizontal: ${sizeNormalize(ph)}px;`}
    ${({ pv }) => pv && `paddingVertical: ${sizeNormalize(pv)}px;`}
    ${({ bg }) => bg && `backgroundColor: ${bg};`}
    ${({ center }) => center && `justifyContent: center; alignItems: center;`}
    position: relative;
`;
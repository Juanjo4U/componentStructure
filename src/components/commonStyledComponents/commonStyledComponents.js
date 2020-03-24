import styled from "styled-components/native";

export const Label = styled.Text`
    color: ${({ c }) => c || 'black'};
    fontSize: ${({ fs }) => fs || 15}px;
    ${({ fw }) => fw && `fontWeight: ${fw};`}
    ${({ center }) => center && `textAlign: center`}
    ${({ m }) => m && `margin: ${m}px;`}
`;

export const Content = styled.View`
    flex: ${({ f }) => f || 1};
    ${({ br }) => br && `borderRadius: 10px;`}
    ${({ p }) => p && `padding: ${p}px;`}
    ${({ bg }) => bg && `backgroundColor: ${bg};`}
    ${({ center }) => center && `justifyContent: center; alignItems: center;`}
`;
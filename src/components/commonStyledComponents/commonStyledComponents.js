import styled from "styled-components/native";

export const Label = styled.Text`
    color: ${({ c }) => c || 'black'};
    fontSize: ${({ fs }) => fs || 15}px;
    ${({ fw }) => fw && `fontWeight: ${fw};`}
    ${({ center }) => center && `textAlign: center`}
    ${({ m }) => m && `margin: ${m}px;`}
`;
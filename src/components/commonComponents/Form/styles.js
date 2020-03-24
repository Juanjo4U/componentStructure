import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from '../../../utils/constants'


export const Container = styled.View`
    width: 96%;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(35)}px;
    justifyContent: space-between;
    margin: 5px;
`;

export const Label = styled.Text`
    fontSize: 13px;
    ${({ z }) => z ? 'zIndex:' + z : ''}
`;

export const TextInputWrapper = styled.View`
    flex-direction:row;
    justifyContent: center;
    alignItems: center;
    ${({ bg }) => bg ? 'backgroundColor: ' + bg : ''};
    width: 100%;
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(34)}px;
    borderColor: ${({ bdc }) => bdc ? bdc : 'black'};
    borderStyle: solid;
    borderBottomWidth: ${({ bw }) => bw ? bw : .25}px;
`

export const TextInput = styled.TextInput`
    flex: 1;
    fontSize: 15px;
    textDecoration: none;
`;

export const Icon = styled(FontAwesomeIcon)`
    margin: 6px;
    width: 10%;
    fontSize: ${({ size }) => size ? sizeNormalize(size) : sizeNormalize(20)}px;
    color: ${({ color }) => color ? color : constants.lightGrey};
    justifyContent: center;
`;

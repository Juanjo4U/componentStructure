import React from "react";
import IconFawesome from "react-native-vector-icons/FontAwesome5";
import { sizeNormalize } from "../../../../utils/adaptSizes";
import constants from "../../../../utils/constants";
import styled from "styled-components/native";
import { Label } from "../../../commonStyledComponents/commonStyledComponents";

const ButtonNative = styled.TouchableOpacity`
    ${({ bg }) => bg ? 'backgroundColor: ' + bg : ''};
    flexDirection: row;
    alignItems: center;
    ${({ w }) => w ? `width: ${w}%;` : ''}
    height: ${({ h }) => h ? sizeNormalize(h) : sizeNormalize(33)}px;
    ${({ posA }) => posA ? `position: absolute;` : ``}
    ${({ top }) => top ? 'top:' + top : ''};
    ${({ left }) => left ? 'left:' + left : ''};
    ${({ right }) => right ? 'right:' + right : ''};
    ${({ bottom }) => bottom ? 'bottom:' + bottom : ''};
    ${({ z }) => z ? 'zIndex:' + z : ''};
`;

const IconContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    width: ${sizeNormalize(40)}px;
    height: 100%;
`;

const Icon = styled(IconFawesome)`
    color: ${({ c }) => c ? c : constants.primaryColor};
`;


export default ({ label, icon, action, style = {} }) =>
    <ButtonNative
        onPress={action}
        bg={style.color}
        w={style.width}
        posA={style.posAbsolute}
        top={style.top}
        bottom={style.bottom}
        left={style.left}
        right={style.right}
        z={15}
    >
        {icon &&
            <IconContainer>
                <Icon c={style.labelColor} name={icon} size={sizeNormalize(18)} />
            </IconContainer>
        }
        {label && <Label c={style.labelColor || constants.primaryColor} fw={style.fontWeight}>{label}</Label>}
    </ButtonNative>

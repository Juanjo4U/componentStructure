import React from "react";
import styled from "styled-components/native";
import Identifier from "../../commonComponents/Identifier/Identifier";
import Charge from "../../commonComponents/chargePercent/label&Percentage";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import { sizeNormalize } from "../../../utils/adaptSizes";
import constants from "../../../utils/constants";

const Wrapper = styled.View`
    width: 100%;
    height: 170px;
    flexDirection: row;
    marginVertical: 8px;
    borderRadius: ${sizeNormalize(10)}px;
    borderWidth: ${sizeNormalize(0.5)}px;
    borderColor: ${constants.lightGrey};
`;

const Image = styled.Image`
    flex: ${({ f }) => f || 1};
    borderBottomLeftRadius: ${sizeNormalize(10)}px;
    borderTopLeftRadius: ${sizeNormalize(10)}px;
`;

const Container = styled.View`
    flex: ${({ f }) => f || 1};
    backgroundColor: ${({ bg }) => bg || constants.secondaryColor};
    borderTopRightRadius: ${sizeNormalize(10)}px;
    borderBottomRightRadius: ${sizeNormalize(10)}px;
    padding: ${sizeNormalize(10)}px;
`;

const Header = styled.View`
    flex: ${({ f }) => f || .3};
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

export default ({ image, id = {}, label = {}, activity = {} }) =>
    <Wrapper>
        <Image f={1.3} source={{ uri: image }} />
        <Container f={4} >
            <Header f={.7} >
                <Identifier color={id.color} label={id.label} />
                <Label fw='200' fs={10} >{label.dayName}</Label>
            </Header>
            <Content>
                <Label fw='bold' >{label.title}</Label>
                <Label fs={12} fw='200'>{label.duration + ' - ' + label.distance}</Label>
            </Content>
            <Content f={1.3}>
                <Charge label='Fuerza' percentage={activity.strengh} color='red' />
                <Charge label='Velocidad' percentage={activity.speed} />
                <Charge label='Recistencia' percentage={activity.resistance} color='gold' />
            </Content>
        </Container>
    </Wrapper>
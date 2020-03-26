import React from "react";
import styled from "styled-components/native";
import Identifier from "../../commonComponents/Identifier/Identifier";
import Charge from "../../commonComponents/chargePercent/label&Percentage";
import { Label, Content } from "../../commonStyledComponents/commonStyledComponents";
import { sizeNormalize } from "../../../utils/adaptSizes";

const Wrapper = styled.View`
    width: 100%;
    height: 170px;
    flexDirection: row;
    marginVertical: 8px;
`;

const Image = styled.Image`
    flex: ${({ f }) => f || 1};
    borderBottomLeftRadius: 10px;
    borderTopLeftRadius: 10px;
`;

const Container = styled.View`
    flex: ${({ f }) => f || 1};
    backgroundColor: white;
    borderTopRightRadius: 10px;
    borderBottomRightRadius: 10px;
    padding: 10px;
`;

const Header = styled.View`
    flex: ${({ f }) => f || .3};
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

/* {
    image: 'https://www.tom-archer.com/wp-content/uploads/2018/04/2--masai-at-sunset-serengeti.jpg',
    id: {
        color: 'green',
        label: 'Natacion'
    },
    label: {
        title: 'This is gonna be the title',
        dayName: 'sábado',
        duration: '2:00 horas',
        distance: '46 kms',
    },
    activity: {
        strengh: 0.5,
        speed: 0.8,
        resistance
    }
}, */

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
                <Charge label='Recistencia' percentage={activity.resistance} color='yellow' />
            </Content>
        </Container>
    </Wrapper>
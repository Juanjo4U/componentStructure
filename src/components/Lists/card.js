import React from "react";
import styled from "styled-components/native";
import Identifier from "../commonComponents/Identifier/Identifier";
import { Label } from "../commonStyledComponents/commonStyledComponents";

const Wrapper = styled.View`
    width: 100%;
    height: 200px;
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

const Content = styled.View`
    flex: ${({ f }) => f || 1};
    ${({ br }) => br && `borderRadius: 10px;`}
    padding: 10px;
`;

export default ({ image, id = {}, label = {} }) =>
    <Wrapper>
        <Image f={2} source={{ uri: image }} />
        <Container f={4} >
            <Content f={0.3} >
                {id.label && <Identifier color={id.color} label={id.label} />}
            </Content>
            <Content>
                {label.title && <Label fw='bold' >{label.title}</Label>}
                {label.subtitle && <Label fs={12} fw='200'>{label.subtitle}</Label>}
            </Content>
            <Content f={3}>
                {label.text && <Label fs={12} >{label.text}</Label>}
            </Content>
        </Container>
    </Wrapper>
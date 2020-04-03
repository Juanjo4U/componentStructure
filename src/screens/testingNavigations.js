import React from "react";
import { Content as Wrapper, Label } from "../components/commonStyledComponents/commonStyledComponents";

export default ({ navigation: { navigate } }) =>
    <Wrapper center>
        <Label mv={10} c='blue' onPress={() => navigate('option1')}>option 1</Label>
        <Label mv={10} c='blue' onPress={() => navigate('option2')}>option 2</Label>
        <Label mv={10} c='blue' onPress={() => navigate('option3')}>option 3</Label>
        <Label mv={10} c='blue' onPress={() => navigate('option4')}>option 4</Label>
        <Label mv={10} c='blue' onPress={() => navigate('option5')}>option 5</Label>
        <Label mv={10} c='blue' onPress={() => navigate('option6')}>option 6</Label>
    </Wrapper>
import React from "react";
import Wrapper from "../../components/commonComponents/Wrappers/backWrapper";
import { Scroll } from "../../components/commonStyledComponents/commonStyledComponents";
import UserData from "../../components/user/profile/picture&Name";
import ProfileOptions from "../../components/user/profile/profileOptions";
export default ({ route }) =>
    <Wrapper>
        <Scroll contentContainerStyle={{ paddingHorizontal: 20 }}>
            <UserData />
            <ProfileOptions />
        </Scroll>
    </Wrapper>
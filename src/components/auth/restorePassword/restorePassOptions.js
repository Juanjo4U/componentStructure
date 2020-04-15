import React from "react";
import { Content as Wrapper } from "../../commonStyledComponents/commonStyledComponents";
import { InputEmail } from "../../commonComponents/Form/input";
export default ({ }) =>
    <Wrapper ph={10}>
        <InputEmail
            validator={{}}
            options={{
                icon: 'envelope',
                placeholder: 'email'
            }}
        />
    </Wrapper>

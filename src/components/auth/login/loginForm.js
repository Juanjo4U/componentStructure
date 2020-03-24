import React from "react";
import Wrapper from "../../commonComponents/Form/formWrapper";
import { InputEmail, InputPassword } from "../../commonComponents/Form/input";

export default () =>
    <Wrapper>
        <InputEmail
            validator={{}}
            options={{
                icon: 'envelope',
                placeholder: 'email'
            }}
        />
        <InputPassword
            validator={{}}
            options={{
                icon: 'lock',
                placeholder: 'password'
            }}
        />
    </Wrapper>
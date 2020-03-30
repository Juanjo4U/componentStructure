import React from "react";
import Form from "../../commonComponents/Form/formWrapper";
import { InputEmail, InputPassword, InputBasic } from "../../commonComponents/Form/input";

export default () =>
    <Form>
        <InputEmail
            validator={{}}
            options={{
                icon: 'envelope',
                placeholder: 'email'
            }}
        />
        <InputBasic
            validator={{}}
            options={{
                icon: 'user',
                placeholder: 'email'
            }}
        />
        <InputPassword
            validator={{}}
            options={{
                icon: 'key',
                placeholder: 'password'
            }}
        />
        <InputPassword
            validator={{}}
            options={{
                icon: 'key',
                placeholder: 'password'
            }}
        />
    </Form>
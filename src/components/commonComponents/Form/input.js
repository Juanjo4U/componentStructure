import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Container, Label, TextInput, Icon, TextInputWrapper } from "./styles";
import { generateValidator } from "../../../utils/inputValidator";

const defaultAction = txt => console.log()

const InputBase = ({ name, label, value, action = defaultAction, validator = {}, options = {}, onSubmitEditing }, ref) => {
    const input = ref || useRef();
    const [isValid, setValid] = useState(true);

    const defaultOptions = {
        editable: true,
        secure: false,
        keyboard: 'default',
        icon: null,
        style: {
            colors: {
                default: 'black',
                error: 'red',
                background: 'white',
            },
            size: {
                withLabel: 60,
                withoutLabel: 40,
                comment: 100
            }
        }
    }

    const param = Object.assign(defaultOptions, options);

    const handleChange = txt => {

        let valid = generateValidator(txt, validator);
        setValid(valid)
        if (!valid) action({ name, valid })
        else {
            if (!isNaN(txt) && !!txt) txt = Number(txt)

            if (txt != value) {
                if (name) action({ name, value: txt, valid })
                else action(txt);
            }
        }

    }

    useEffect(() => {
        let currentValue = input.current._lastNativeText === '' ? '' : input.current._lastNativeText || input.current._getText();
        validator.validating && handleChange(currentValue)
    }, [validator.validating])

    return (
        <Container h={
            param.multiline && label ?
                120
                :
                param.multiline && !label ?
                    param.style.size.comment
                    :
                    label ?
                        param.style.size.withLabel
                        :
                        param.style.size.withoutLabel
        } >
            {label && <Label>{label}</Label>}
            <TextInputWrapper
                isValid={isValid} h={param.multiline ? param.style.size.comment : param.style.size.withoutLabel}
                bg={!param.editable ? '#d9d7d7' : param.style.colors.background}
            >
                {param.icon &&
                    <Icon
                        name={param.icon}
                        isValid={isValid}
                    />
                }
                <TextInput ref={input}
                    placeholder={param.placeholder ? param.placeholder : ''}
                    defaultValue={(value || value == 0) ? value.toString() : ''}
                    onChangeText={handleChange}
                    secureTextEntry={param.secure}
                    keyboardType={param.keyboard}
                    editable={param.editable}
                    multiline={param.multiline}
                    onSubmitEditing={onSubmitEditing}
                >
                </TextInput>

            </TextInputWrapper>

        </Container>
    )
}


export const InputEmail = forwardRef((props, ref) => {
    props.validator.type = 'email';
    props.options.keyboard = 'email-address'
    return InputBase(props, ref);
})

export const InputPassword = forwardRef((props, ref) => {
    props.validator.type = 'password';
    props.options.secure = true;
    return InputBase(props, ref);
})

export const InputDate = forwardRef((props, ref) => {
    props.validator.type = 'date';
    props.options.keyboard = 'numeric';
    return InputBase(props, ref);
})

export const InputNumber = forwardRef((props, ref) => {
    props.validator.type = 'number';
    props.options.keyboard = 'numeric';
    return InputBase(props, ref);
})

export const InputFloat = forwardRef((props, ref) => {
    props.validator.type = 'float';
    props.options.keyboard = 'numeric';
    return InputBase(props, ref);
})

export const InputComment = forwardRef((props, ref) => {
    props.options.keyboard = 'default';
    props.options.multiline = true;
    return InputBase(props, ref);
})

export const InputDisabled = forwardRef((props, ref) => {
    props.options.editable = false;
    return InputBase(props, ref);
})

export const InputBasic = forwardRef((props, ref) => {
    return InputBase(props, ref);
})

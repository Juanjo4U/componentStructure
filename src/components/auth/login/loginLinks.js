import React from "react";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";

export default ({ register = () => { }, restorePassword = () => { } }) =>
    <>
        <Label onPress={restorePassword}
            c={constants.linkColor}
            m={15} underline
        >
            Recordar contraseña
        </Label>

        <Label mh={15} >¿No tienes cuenta?
            <Label onPress={register}
                c={constants.linkColor}
                underline
            >
                Registrate
            </Label>
        </Label>
    </>
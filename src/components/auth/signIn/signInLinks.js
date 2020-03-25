import React from "react";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import constants from "../../../utils/constants";

export default ({ logIn = () => { } }) =>
    <>
        <Label center >¿Ya tienes cuenta?{' '}
            <Label onPress={logIn}
                c={constants.linkColor}
                underline
            >
                Acceder
            </Label>
        </Label>
    </>
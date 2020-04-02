import React from "react";
import { Label } from "../../commonStyledComponents/commonStyledComponents";
import Picture from "./picture";
import hardCodes from "../../../utils/hardCodes";

export default ({ name = 'Nombre Deportista' }) =>
    <>
        <Picture image={hardCodes.list[3].image} />
        <Label center fw='bold' fs={17} mv={15} >{name}</Label>
    </>
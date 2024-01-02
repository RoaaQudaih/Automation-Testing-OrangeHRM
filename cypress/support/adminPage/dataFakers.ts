import { NewUser } from "./createDataType";
import { getPrefix } from "@support/shared/utils";
import { UserRole } from "./types";


export const getUser = (prefix:string = getPrefix()): NewUser => {
    return {
        username: `Cypress User ${prefix}`,
        password: `Cypress123`,
        status: "Enabled",
        userRoleId: "Admin",
        empNumber: 7,
    }
}
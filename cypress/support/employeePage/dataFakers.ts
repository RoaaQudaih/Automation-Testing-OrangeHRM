import { getPrefix } from "@support/shared/utils";
import { Employeebody } from "./createDataType";
import { EmployeeLoginDetail } from "./createDataType";
import { UserRole } from "@support/adminPage/types";

export const getEmployee = (prefix:string = getPrefix()): Employeebody => {
    return {
        firstName: `Cypress Employee ${prefix}`,       
        lastName: `Cypress Employee ${prefix}`,
        employeeId: "1234",
        middleName: null,
        empPicture: null
        }
}

export const getEmployeeLoginDetail = (prefix:string = getPrefix()): EmployeeLoginDetail => {
    return {
        empNumber: "4567",
        password: `Cypress${prefix}`,
        status: "Enable",
        userRoleId: UserRole["Admin"],
        username: `Cypress Employee ${prefix}`
        }
}
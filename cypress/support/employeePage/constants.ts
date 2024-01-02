import { EmployeeLoginDetail, Employeebody } from "./createDataType";
export const createNewEmployeeBody = (employee: Employeebody) => {
    return {
        firstName: employee.firstName,  
        lastName: employee.lastName,
        employeeId: employee.employeeId
    };
  };

  export const createNewEmployeeLoginPage = (employee:EmployeeLoginDetail ) => {
    const status=employee.status==="Enable";
    return {
        ...employee,
        status:status   
    };
  };
export interface Employeebody {
  firstName: string;  
  lastName: string;
  employeeId: string;
  middleName?: string;
  empPicture?: string
}

export interface EmployeeLoginDetail {
  empNumber: string;
  password: string;
  status: "Enable" | "Disable";
  userRoleId: Number;
  username: string;
}

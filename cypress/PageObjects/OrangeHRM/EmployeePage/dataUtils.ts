import { Employeebody } from "../../../support/employeePage/createDataType";
import {createNewEmployeeLoginPage, createNewEmployeeBody } from "@support/employeePage/constants";
import { EmployeeLoginDetail } from "../../../support/employeePage/createDataType";

class EmplyeePageDataUtils {
  createNewEmployee = (Employee: Employeebody) => {
    return cy
      .request({
        method: "POST",
        url: "/api/v2/pim/employees",
        body: createNewEmployeeBody(Employee)
      })
      .then((response) => {
        return response.body.data.empNumber;
      });
  };

  createLoginDetails = (LoginDetail: EmployeeLoginDetail) => {
    cy.request({
      method: "POST",
      url: "/api/v2/admin/users",
      body: createNewEmployeeLoginPage(LoginDetail),
    });
  };

  getEmployeeById = (id: string) => {
    return cy
      .request(
        "GET",
        `/api/v2/pim/employees?employeeId=${id}`
      )
      .then((Response) => {
        return Response.body.data[0].empNumber;
      });
  };

  deleteEmployee = (id: string) => {
    this.getEmployeeById(id).then((response)=>{
        response && cy.request({
          method: "DELETE",
          url: "/api/v2/pim/employees",
          body: {
          ids: [response],
          },
        });     
    })
  }
    
}
export default EmplyeePageDataUtils;

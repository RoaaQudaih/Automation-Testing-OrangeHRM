import { Employeebody } from "./createDataType";
import { EmployeeLoginDetail } from "./createDataType";
class EmplyeePageDataUtils {
  createNewEmployee = (Employee: Employeebody) => {
    return cy
      .request({
        method: "POST",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
        body: Employee,
      })
      .then((Response) => {
        return Response.body;
      });
  };

  createLoginDetails = (LoginDetail: EmployeeLoginDetail) => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
      body: LoginDetail,
    });
  };

  getEmployeeIdByName = (name: string) => {
    return cy
      .request(
        "GET",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=${name}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`
      )
      .then((Response) => {
        if (Response.status === 200 && Response.body.data.length > 0) {
          const id = Response.body.data[0].empNumber;
          return id;
        } else {
          throw new Error(`User not found with name: ${name}`);
        }
      });
  };
  deleteEmployee = (name: string) => {
    this.getEmployeeIdByName(name).then((id) => {
      cy.request({
        method: "DELETE",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
        body: {
          ids: [id],
        },
      });
    });
  };
}
export default EmplyeePageDataUtils;

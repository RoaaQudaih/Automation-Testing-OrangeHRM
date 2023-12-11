import { Entitlements } from "./createDataType";
import { Leave } from "./createDataType";
let id: number;
class LeavePageDataUtils {
  addNewEntitlements = (entitlement: Entitlements) => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-entitlements",
      body: entitlement,
    });
  };

  addNewLeave = (Leave: Leave) => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-requests",
      body: Leave,
    }).then((Response) => {
      id = Response.body.data.id;
    });
  };

  approveLeave = () => {
    cy.request({
      method: "PUT",
      url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests/${id}`,
      body: {
        action: "APPROVE",
      },
    });
  };
}
export default LeavePageDataUtils;

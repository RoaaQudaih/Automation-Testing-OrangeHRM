import { user } from "../../../PageObjects/OrangeHRM/addUser/createDataType";

class addUserDataUtils {
  getUserIdByName = (name: string) => {
    return cy
      .request(
        "GET",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&username=${name}&sortField=u.userName&sortOrder=ASC`
      )
      .then((Response) => {
        if (Response.status === 200 && Response.body.data.length > 0) {
          const id = Response.body.data[0].id;
          return id;
        } else {
          throw new Error(`User not found with name: ${name}`);
        }
      });
  };

  deleteUserByName = (name: string) => {
    this.getUserIdByName(name).then((id) => {
      cy.request({
        method: "DELETE",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
        body: {
          ids: [id],
        },
      });
    });
  };

  createNewUser = (user: user) => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
      body: user,
    }).then((Response) => {
      expect(Response.status).to.eq(200);
    });
  };

  changeDetals = (user: user) => {
    this.getUserIdByName(user.username).then((id) => {
      cy.request({
        method: "PUT",
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users/${id}`,
        body: user,
      });
    });
  };
}

export default addUserDataUtils;

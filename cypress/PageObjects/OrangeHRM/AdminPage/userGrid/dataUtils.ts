import { createNewUserBody } from "@support/adminPage/constants";
import { NewUser } from "@support/adminPage/createDataType";

class UserDataUtils {
  createNewUser = (user: NewUser) => {
    return cy
      .request({
        method: "POST",
        url: "/api/v2/admin/users",
        body: createNewUserBody(user),
      })
      .then((response) => {
        return response.body.data.id;
      });
  };

  getUserIdByUsername = (name: string) => {
    return cy
      .request(
        "GET",
        `/api/v2/admin/users?limit=50&offset=0&username=${name}&sortField=u.userName&sortOrder=ASC`
      )
      .then((response) => {
        return response.body.data[0].id;
      });
  };

  deleteUserByName = (name: string) => {
    this.getUserIdByUsername(name).then((id) => {
      id && cy.request({
        method: "DELETE",
        url: "/api/v2/admin/users",
        body: {
          ids: [id],
        },
      });
    });
  };

  updateUserDetails = (user: NewUser) => {
    this.getUserIdByUsername(user.username).then((id) => {
      cy.request({
        method: "PUT",
        url: `/api/v2/admin/users/${id}`,
        body: createNewUserBody(user),
      });
    });
  };
}

export default UserDataUtils;

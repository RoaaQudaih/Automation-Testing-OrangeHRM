import { NewUser } from "./createDataType";
import { UserRole } from "./types";

export const createNewUserBody = (user: NewUser) => {
  // build json => if we need to modify something
  return {
    ...user ,
    userRoleId: UserRole[user.userRoleId],
    status:user.status==="Enabled" 
  };
};
 
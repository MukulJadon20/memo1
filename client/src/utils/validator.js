import { isValidUsername } from "6pp";

export const userValidators = (username) => {
  if (!isValidUsername(username))
    return { isValid: false, errorMessage: "username is invalid" };
};
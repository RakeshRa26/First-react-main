import { createContext } from "react";
import {type IAuthContext} from "../../Library/types/AuthContract"

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: null,
  login: async () => {},
  getLoggedInUser: async () => {}
})

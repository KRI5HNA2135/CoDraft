import { User } from "./types";

export {

}

declare global {
   interface customJWTSessionClaims extends User {

   }
}
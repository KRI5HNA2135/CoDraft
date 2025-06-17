import { User } from "./types";

declare global {
   interface customJwtSessionsClaims extends User {

   }
}
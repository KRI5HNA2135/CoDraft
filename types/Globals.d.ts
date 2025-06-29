// import { User } from "./types";

// declare global {
//    interface customJwtSessionsClaims extends User {
      
//    }
// }

import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Clerk {
    interface CustomJwtSessionClaims extends JwtPayload {
      email: string;
      fullName: string;
      image: string;
    }
  }
}

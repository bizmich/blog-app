declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface User {
    token: string;
    user: UserData;
  }

  export interface Session {
    user: User;
  }

  interface UserData {
    createdAt: string;
    email: string;
    emailVerifiedAt: string;
    id: number;
    name: string;
    updatedAt: string;
  }
}

export interface Permission {
  id: string;
  name: string;
}

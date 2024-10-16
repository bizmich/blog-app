import { axiosInstance } from '@services';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          return await axiosInstance
            .post('/login', credentials)
            .then(({ data }) => data);
        } catch (error) {
          throw new Error('Произошла ошибка аутентификации');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as User;

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },

  debug: process.env.NODE_ENV !== 'development',
};

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserbyEmail } from "./data/users"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
}
  = NextAuth({

    session: {
      strategy: 'jwt'
    },

    providers: [
      CredentialsProvider({
          async authorize(credentials){
          const user = getUserbyEmail(credentials.email);
          
            if(user){
              return credentials.password === user.password ? user : null
            }
            else
              return null
            
          
        },

    }),

      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,

        authorization: {
          params: {
            prompt: 'consent'
          }
        }
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,

        authorization: {
          params: {
            prompt: 'consent'
          }
        }

      })
      // ...add more providers here
    ]
  })
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Aquí puedes implementar tu lógica de autenticación
        // Verifica las credenciales y devuelve un objeto de usuario si son válidas
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  jwt: {
    secret: "your-secret-key-here"
  }
})
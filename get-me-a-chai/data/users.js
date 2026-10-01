const users = [
    {
        email: "aman@email.com",
        password: "password"
    },
    {
        email: "alex@email.com",
        password: "password"
    },
    {
        email: "ali@email.com",
        password: "password"
    },
]

export const getUserbyEmail=(email) => {
  const user = users.find(u => u.email === email )
  return user
}

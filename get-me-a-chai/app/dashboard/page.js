import { auth } from "@/auth"
import { redirect } from "next/navigation"

const Dashboard = async () => {

    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div>
            <h2>
                Welcome Back {session.user?.name}!
            </h2>
        </div>
    )
}

export default Dashboard
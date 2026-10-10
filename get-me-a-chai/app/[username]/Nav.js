"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = ({ user}) => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-10 text-lg">
      <Link
        href={`/${user.username}/`}
        className={
          pathname === `/${user.username}` ? "text-purple-300 border-b-2" : ""
        }
      >
        Home
      </Link>

      <Link
        href={`/${user.username}/chat`}
        className={
          pathname === `/${user.username}/chat` ? "text-purple-300 border-b-2" : ""
        }
      >
        Chats
      </Link>

      <Link
        href={`/${user.username}/about`}
        className={
          pathname === `/${user.username}/about` ? "text-purple-300 border-b-2" : ""
        }
      >
        About
      </Link>
    </nav>
  )
}

export default Nav
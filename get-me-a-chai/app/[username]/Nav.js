"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = ({ username }) => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-10 text-lg">
      <Link
        href={`/${username}/`}
        className={
          pathname === `/${username}` ? "text-purple-300 border-b-2" : ""
        }
      >
        Home
      </Link>

      <Link
        href={`/${username}/chat`}
        className={
          pathname === `/${username}/chat` ? "text-purple-300 border-b-2" : ""
        }
      >
        Chats
      </Link>

      <Link
        href={`/${username}/about`}
        className={
          pathname === `/${username}/about` ? "text-purple-300 border-b-2" : ""
        }
      >
        About
      </Link>
    </nav>
  )
}

export default Nav
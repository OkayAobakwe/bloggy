import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
  const {data, status} = useSession()
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) => 
    router.pathname === pathname
  if(status === "loading"){
    return <div>Loading...</div>
  }

  return(
    <nav className="flex items-center justify-between bg-teal-800 h-16 top-0">
      <div className="w-full block flex-grow ">
        <div className="text-sm lg:flex-grow pl-5">
          <Link href="/">
            Posts
          </Link>
        </div>
      </div>
      {data?.user ? (
        <div className="flex items-center">
          <div>{data?.user.name}</div>
          <button
            onClick={() => signOut()}
            className="bg-transparent hover:bg-blue-500 rounded w-20 mx-4"
          >
            sign out
          </button>
        </div>
      ): 
      (
        <div>
          <Link passHref href="/api/auth/signin">
            <button>sign in</button>
          </Link>
        </div>
      )
      }
    </nav>
  )

}
export default Header;
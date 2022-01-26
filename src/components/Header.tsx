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
    <nav className="flex items-center justify-between bg-teal-800">
      <div className="w-full block flex-grow ">
        <div className="text-sm lg:flext-grow">
          <Link href="/">
            Posts
          </Link>
        </div>
      </div>
      {data?.user ? (
        <>
          <div>{data?.user.name}</div>
          <button
            onClick={() => signOut()}
          >
            sign out
          </button>
        </>
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
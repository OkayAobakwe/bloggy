import { FC, ReactNode } from "react"
import Header from "./Header"

type Props ={
  children: ReactNode
}

const Layout: FC<Props> = (props) => (
  <div>
    <Header />
    <div>{props.children}</div>
  </div>
)

export default Layout;
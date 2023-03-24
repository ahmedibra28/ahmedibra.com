import Nav from './Nav'
import { ReactNode } from 'react'
import Meta from './Meta'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Meta />
    <Nav />
    <main
      className='py-2 scroll-smooth'
      style={{ minHeight: 'calc(100vh - 120px)' }}
    >
      {children}
    </main>
  </div>
)

export default Layout

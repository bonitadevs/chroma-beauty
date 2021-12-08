import Navbar from './Navbar'
import Footer from './Footer'
import { Header } from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header>
      <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

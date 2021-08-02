import Navbar from './navbar'
import Footer from './foorter'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="p-10">
      <Header/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
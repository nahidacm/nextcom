import Navbar from './navbar'
import Footer from './foorter'

export default function Layout({ children }) {
  return (
    <div className="p-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
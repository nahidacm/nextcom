import Navbar from './navbar'
import Footer from './foorter'
import Header from './header'
import MiniCart from '../../components/cart/MiniCart';

export default function Layout({ children }) {
  return (
    <div className="p-10">
      <Header/>
      <Navbar />
      <main>{children}</main>
      <MiniCart/>
      <Footer />
    </div>
  )
}
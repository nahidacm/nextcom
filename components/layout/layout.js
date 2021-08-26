import Navbar from './navbar'
import Footer from './foorter'
import Header from './header'
import dynamic from 'next/dynamic'


const MiniCart = dynamic(
  () => import('../../components/cart/MiniCart'),
  { ssr: false }
);

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
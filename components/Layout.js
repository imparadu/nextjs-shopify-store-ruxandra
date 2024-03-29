// components/layout.js
import BackToTopButton from '@/components/BackToTopButton';
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}
      
      </main>
      <Footer />
    </div>
  )
}

export default Layout
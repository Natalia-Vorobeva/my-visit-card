import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
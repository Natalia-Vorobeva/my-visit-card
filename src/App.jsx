import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photographer from './pages/Photographer';
import Designer from './pages/Designer';
import Psychologist from './pages/Psychologist';
import ClientAccountDemo from './pages/ClientAccountDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница с обработкой всех путей */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="cases/photographer" element={<Photographer />} />
          <Route path="cases/designer" element={<Designer />} />
          <Route path="cases/psychologist" element={<Psychologist />} />
          <Route path="client-account-demo" element={<ClientAccountDemo />} />
          {/* Резервный маршрут для всех остальных путей */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
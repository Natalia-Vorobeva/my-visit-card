import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photographer from './pages/Photographer';
import Designer from './pages/Designer';
import Psychologist from './pages/Psychologist';
import PersonalAccountDemo from './pages/PersonalAccountDemo';
import ClientAccountDemo from './pages/ClientAccountDemo'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/cases" element={<Home />} />
					<Route path="/process" element={<Home />} />
					<Route path="/playground" element={<Home />} />
					<Route path="/cases/photographer" element={<Photographer />} />
					<Route path="/cases/designer" element={<Designer />} />
					<Route path="/cases/psychologist" element={<Psychologist />} />
					{/* <Route path="/personal-account-demo" element={<PersonalAccountDemo />} /> */}
					<Route path="/client-account-demo" element={<ClientAccountDemo />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
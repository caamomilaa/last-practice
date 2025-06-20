import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import { AuthProvider } from './lib/providers/auth.provider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

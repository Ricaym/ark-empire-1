import './App.css';

import { LanguageProvider } from './components/LanguageContext';
import Header from './components/header'
import Play from './components/play'
// import Social from './components/social'
// import Banners from './components/banners'
// import Draft from './components/draft'

function App() {
	return (
		<div className="App">
			<LanguageProvider>
				<Header/>
				<Play/>
			</LanguageProvider>
		</div>
	);
}

export default App;
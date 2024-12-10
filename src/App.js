import './App.css';

import Header from './components/header'
import Play from './components/play'
import Social from './components/social'
import Banners from './components/banners'
import Draft from './components/draft'

function App() {
return (
	<div className="App">
		<Header/>
		<Social/>
		<Play/>
		<Banners/>
		<Draft/>
	</div>
);
}

export default App;
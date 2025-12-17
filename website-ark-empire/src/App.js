import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { LanguageProvider } from './components/LanguageContext';
import Header from './components/header'
import Play from './components/play'
import Settings from './components/settings'
import Game from './components/game'
import CharacterList from './components/CharacterList';

const router = createBrowserRouter([
	{
		path: '/',
		element:
			<div className="App">
				<LanguageProvider>
					<Header/>
					<Settings/>
				</LanguageProvider>
			</div>
	},
	{
		path: '/game',
		element:
			<div className="App">
				<LanguageProvider>
					<Header/>
					<Game/>
					<Settings/>
				</LanguageProvider>
			</div>
	},
	{
		path: '/about',
		element:
			<div className="App">
				<LanguageProvider>
					<Header/>
					<Play/>
					<Settings/>
				</LanguageProvider>
			</div>
	},
	{
		path: '/contact',
		element:
			<div className="App">
				<LanguageProvider>
					<Header/>
					<Play/>
					<Settings/>
				</LanguageProvider>
			</div>
	},
	{
		path: '/account',
		element:
			<div className="App">
				<LanguageProvider>
					<Header/>
					<Settings/>
				</LanguageProvider>
			</div>
	},
	{
		path: '/characters',
		element:
			<div className="App">
				<CharacterList/>
			</div>
	}
])

function App() {
	return <RouterProvider router={router}/>;
}

export default App;
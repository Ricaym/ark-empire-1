import '../stylesheets/game.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext } from 'react';
import characters from '../data/characters.json';

function Game() {
	const { t } = useContext(LanguageContext);
	return (
		<div>
			<div className="filters_div">
				<h1>{t['game_title']}</h1>
			</div>
			<div className="game_div">
				<p>{t['characters_list']}</p>
				<div className="ark"> {
					characters.map((char) => (
						<div key={char.id} className={char.id}>
							
							{char.route ? (
								<a href={char.route}>{char.name}</a>
							) : null}
							<img src={char.image} alt={char.name} className="character_image"/>
							<p>
								{char.name}
							</p>
						</div>
					))
				} </div>
			</div>
			<div className="social_div">
				<h1>{t['game_title']}</h1>
			</div>
		</div>
	);
}

export default Game;
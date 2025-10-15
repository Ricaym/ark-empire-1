import '../stylesheets/game.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext } from 'react';

function Game() {
	const { t } = useContext(LanguageContext);

	return (
		<div className="game_div">
			<p>{t['characters_list']}</p>

			<div className='ark'>
				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>
				
				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>

				<div className='silanto'>
					<p>{t['silanto']}Silanto</p>
				</div>

				<div className='serpane'>
					<p>{t['serpane']}Serpane</p>
				</div>

				<div className='darioso'>
					<p>{t['darioso']}Darioso</p>
				</div>

				<div className='bion'>
					<p>{t['bion']}Bion</p>
				</div>
			</div>
			
		</div>
	);
}

export default Game;
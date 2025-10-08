import '../stylesheets/play.css'
import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

function Play() {
	const { t } = useContext(LanguageContext);

	return (
		<div className="play_div">
		<button id="play_button">{t['search_game']}</button>
		<button id="mode_button">Mode : 5v5 {t['competitive']}</button>
		</div>
	);
}

export default Play;
import '../stylesheets/game.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext } from 'react';

function Game() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="game_div">
            <p>{t['game_title']}</p>
            <p>{t['game_description']}</p>
            <div className='character_aatrox'>
                <p>{t['character_name']}</p>
                <p>{t['character_description']}</p>
            </div>
            <div className='character'>
                <p>{t['character_name']}</p>
                <p>{t['character_description']}</p>
            </div>
            <div className='character'>
                <p>{t['character_name']}</p>
                <p>{t['character_description']}</p>
            </div>
        </div>
    );
}

export default Game;
import '../stylesheets/header.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext } from 'react';

function Header() {
	const { t } = useContext(LanguageContext)

	return (
		<div>
			<div className="header_div">
				<div className="menu_div">
					<div className="menu_header">
						<a href="/">{t['home']}</a>
						<a href="/game">{t['the_game']}</a>
						<a href="/about">{t['about']}</a>
						<a href="/contact">{t['contact']}</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
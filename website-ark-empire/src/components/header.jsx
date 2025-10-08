import '../stylesheets/header.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext } from 'react';

function Header() {
	const { locale, setLocale, t } = useContext(LanguageContext)

	return (
		<div>
			<div className="header_div">
			<img src="../assets/logo.png" alt="Ark Empire" />

				<div className="menu_div">
					<div className="menu_header">
						<a href="/">{t['home']}</a>
						<a href="/">{t['the_game']}</a>
						<a href="/">{t['about']}</a>
						<a href="/">{t['contact']}</a>
					</div>
				</div>
			</div>
			<select value={locale} onChange={e => setLocale(e.target.value)}>
				<option value="fr-FR">FR</option>
				<option value="en-US">EN</option>
			</select>
		</div>
	);
}

export default Header;
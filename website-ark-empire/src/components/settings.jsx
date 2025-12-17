import '../stylesheets/settings.css'
import { LanguageContext } from '../components/LanguageContext';
import { useContext, useState } from 'react';

function Header() {
	const { locale, setLocale, t } = useContext(LanguageContext)

	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="settings_div">
			<button className="burger_btn" onClick={() => setSidebarOpen(true)} style={{ display: sidebarOpen ? 'none' : 'block' }} aria-label="Open menu"> &#9776; </button>
			<div className="sidebar_menu" style={{ display: sidebarOpen ? 'block' : 'none' }}>
				<button className="cross_btn" onClick={() => setSidebarOpen(false)} aria-label="Close menu"> &#10005; </button>
				<a className="account_a" href="/account">{t['account']}</a>
				<div className='language_selector'>
					<p className='language_p'>{t['language']} | </p>
					<select value={locale} onChange={e => setLocale(e.target.value)}>
						<option value="fr-FR">FRANCAIS</option>
						<option value="en-US">ENGLISH</option>
					</select>
				</div>
				<div className="params_div">
					<p>{t['settings']}</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
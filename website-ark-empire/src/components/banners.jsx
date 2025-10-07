import '../stylesheets/banners.css';


function Banners() {
return (
	<div class='players'>
        <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,-25&icon_names=add" /></head>
        <div id='player1_div'>
            <div id='player1_card'>
                <p>Matthieu</p>
                <div class='barre'></div>
            </div>
            <div class='roles'>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
            </div>
        </div>

        <div id='player2_div'>
            <div id='player2_card'>
                <p>Kendal</p>
                <div class='barre'></div>
            </div>
            <div class='roles'>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
            </div>
        </div>

        <div id='yourself_div'>
            <div id='yourself_card'>
                <p>Aymeric</p>
                <div class='barre'></div>
            </div>
            <div class='roles'>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
            </div>
        </div>

        <div id='player3_div'>
            <div id='player3_card'>
                <p>Eliott</p>
                <div class='barre'></div>
            </div>
            <div class='roles'>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
            </div>
        </div>

        <div id='player4_div'>
            <div id='player4_card'>
                <p>Matys</p>
                <div class='barre'></div>
            </div>
            <div class='roles'>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
                <span class="material-symbols-outlined">add</span>
            </div>
        </div>
	</div>
);
}

export default Banners;
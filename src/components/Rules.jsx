import React from 'react';
import "../index.js";

const Rules = () => {
    return (
        <div>
            <div id="navbar">
                <img src="./assets/logoA.png" alt="logo"/>
                <p>Ark Empire</p>
                <div id="pages">
                    <a href="/personnages">Personnages</a>
                    <a href="/shop">Boutique</a>
                    <a href="/rules">Jeu</a>
                    <a href="/download">Télécharger</a>
                </div>
                <a id="account" href="/account">Mon Compte</a>
            </div>
            <p>Bienvenue sur la page de présentation du jeu 'Ark Empire', le MMO RPG aux actions infinies.</p>
        </div>
    );
};

export default Rules;
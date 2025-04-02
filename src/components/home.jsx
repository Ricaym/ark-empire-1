import React from "react";
import "../stylesheets/home.css";

export default function Home() {
    return (
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
    );
}
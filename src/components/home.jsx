import React from "react";
import "../stylesheets/home.css";

export default function Home() {
    return (
        <div id="home">
            <a href="/personnages"><div id="personnage">Personnages</div></a>
            <a href="/shop"><div id="shop">Boutique</div></a>
            <a href="/runes"><div id="runes">Runes</div></a>
        </div>
    );
}
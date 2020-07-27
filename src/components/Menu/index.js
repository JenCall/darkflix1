import React from 'react';
import dark_purple from '../../assets/dark_purple.png';
import './Menu.css';
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={dark_purple} alt="dark_purple" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
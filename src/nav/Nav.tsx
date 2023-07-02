import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.nav}>
            <ul>
                <a href={""}>Introduce</a>
                <a href={""}>About</a>
                <a href={""}>Skills</a>
                <a href={""}>Resume</a>
                <a href={""}>Portfolio</a>
                <a href={""}>Contact</a>
            </ul>
        </div>
    );
}

export default Nav;

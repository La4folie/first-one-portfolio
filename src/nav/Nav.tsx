import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={""}>Introduce</a>
            <a href={""}>About</a>
            <a href={""}>Resume</a>
            <a href={""}>Skills</a>
            <a href={""}>Contact</a>
        </div>
    );
}

export default Nav;

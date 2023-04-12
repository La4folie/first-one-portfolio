import React from 'react';
import s from './Main.module.css';
import sc from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.introduceText}>
                    <h1>Say Hi from Alex</h1>
                    <span>I design and code beautifully simple things and i love what i do. Just simple like that!</span>
                    <p>FrontEnd React Developer</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
};

export default Main;
import React from 'react';
import s from './Main.module.css';
import sc from './../common/styles/Container.module.css';
import roundText from './round-text.png';
import arrowDown from './arrowDown.png';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.introduceText}>
                    <h1 className={s.hIntro}>Say Hi from <span className={s.greenSpan}>Alex</span></h1>
                    <span className={s.text}>I design and code beautifully simple things and i love what i do. Just simple like that!</span>
                    <p className={s.text}>FrontEnd React Developer</p>
                </div>
                <div className={s.GoToProjects}>
                    <a href={'#PortfolioPart'} className={s.imageContainer}>
                        <img src={arrowDown} alt={'Arrow Down'} className={s.arrow}/>
                        <img decoding={"async"} src={roundText} alt={'Rounded Text'} className={s.rounded}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Main;
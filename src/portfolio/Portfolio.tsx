import React from 'react';
import s from './Portfolio.module.css';
import sc from './../common/styles/Container.module.css';
import todoListScreenshot from './todoListScreenshot.jpg';
import capiClean from './capiClean.png';
import mogo from './mogo.png'
import faynlab from './faynlab.png'
import tekvica from './tekvica.png'


const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={`${sc.container} ${s.portfolioContainer}`}>
                <h1 className={s.MyProjectsTitle}>Featured  <span className={s.greenTitle}>Projects</span></h1>
                <div className={s.wideProjects}>
                    <a href="https://github.com/La4folie/TodoList"><img
                        src={todoListScreenshot}
                        className={s.iconWide}
                        alt="TodoList project"/></a>
                    <h2 className={s.text}>To Do List - Personal project</h2>
                </div>
                <div className={s.shortProjects}>
                    <div className={s.shortModule}>
                        <img
                            src={capiClean}
                            className={s.iconShort}
                            alt="TodoList project"/>
                        <h2 className={s.text}>Cleaning company</h2>
                    </div>
                    <div className={s.shortModule}>
                        <img
                            src={mogo}
                            className={s.iconShort}
                            alt="TodoList project"/>
                        <h2 className={s.text}>Personal Blog</h2>
                    </div>
                </div>
                <div className={s.wideProjects}>
                    <div className={s.shortModule}>
                        <a href={'https://www.faynlab.com'}><img
                            src={faynlab}
                            className={s.iconWide}
                            alt="FaynLab"/></a>
                        <h2 className={s.text}>Landing page for orders</h2>
                    </div>
                </div>
                <div className={s.wideProjects}>
                    <div className={s.shortModule}>
                        <a href={'https://tekvica.com'}><img
                            src={tekvica}
                            className={s.iconWide}
                            alt="FaynLab"/></a>
                        <h2 className={s.text}>Website for an agro-cultural company</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
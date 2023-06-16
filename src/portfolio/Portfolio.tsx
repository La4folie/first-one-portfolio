import React from 'react';
import s from './Portfolio.module.css'
import sc from './../common/styles/Container.module.css'
import todoListScreenshot from './todoListScreenshot.png'


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
                    <h2 className={s.text}>Bureau - Architecture Studio Website</h2>
                </div>
                <div className={s.shortProjects}>
                    <div className={s.shortModule}>
                        <a href="https://github.com/La4folie/TodoList"><img
                            src={todoListScreenshot}
                            className={s.iconShort}
                            alt="TodoList project"/></a>
                        <h2 className={s.text}>Bureau - Architecture Studio Website</h2>
                    </div>
                    <div className={s.shortModule}>
                        <a href="https://github.com/La4folie/TodoList"><img
                            src={todoListScreenshot}
                            className={s.iconShort}
                            alt="TodoList project"/></a>
                        <h2 className={s.text}>Bureau - Architecture Studio Website</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
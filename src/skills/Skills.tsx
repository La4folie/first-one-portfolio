import React from 'react';
import s from './Skills.module.css';
import sc from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Advantages</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'JavaScript'}/>
                </div>
                <div className={s.skills}>
                    <Skill title={'TypeScript'}/>
                    <Skill title={'Git'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title:string
}

const Skill = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <p>{props.title}</p>
        </div>
    );
};

export default Skill;
import React from 'react';
import s from './Skill.module.css'
import gitIcon from './../../images/git.png'


type SkillPropsType = {
    title:string
}

const SkillGit = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={gitIcon} className={s.icon}
            alt={'git Icon'}></img>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillGit;
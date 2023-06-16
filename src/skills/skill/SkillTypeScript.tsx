import React from 'react';
import s from './Skill.module.css'
import tsIcon from '../../images/ts.webp'


type SkillPropsType = {
    title:string
}

const SkillTypeScript = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={tsIcon} className={s.icon}
            alt={'TypeScript Icon'}></img>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillTypeScript;
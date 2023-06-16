import React from 'react';
import s from './Skill.module.css'
import htmlIcon from '../../images/html.png'


type SkillPropsType = {
    title:string
}

const SkillHTML = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={htmlIcon} className={s.icon}
            alt={'HTML Icon'}></img>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillHTML;
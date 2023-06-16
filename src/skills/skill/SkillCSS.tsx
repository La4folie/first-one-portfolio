import React from 'react';
import s from './Skill.module.css'
import cssIcon from '../../images/css.png'


type SkillPropsType = {
    title:string
}

const SkillCSS = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={cssIcon} className={s.icon}
            alt={'CSS Icon'}></img>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillCSS;
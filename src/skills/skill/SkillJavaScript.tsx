import React from 'react';
import s from './Skill.module.css'
import javaScriptIcon from '../../images/JS.png'


type SkillPropsType = {
    title:string
}

const SkillJavaScript = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={javaScriptIcon} className={s.icon}
            alt={'JavaScriptIcon'}></img>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillJavaScript;
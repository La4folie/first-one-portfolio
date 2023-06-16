import React from 'react';
import s from './Skills.module.css';
import sc from './../common/styles/Container.module.css'
import SkillCSS from "./skill/SkillCSS";
import SkillJavaScript from "./skill/SkillJavaScript";
import SkillTypeScript from "./skill/SkillTypeScript";
import SkillGit from "./skill/SkillGit";
import SkillHTML from "./skill/SkillHTML";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My <span className={s.greenSpan}>Advantages</span></h2>
                <div className={s.skills}>
                    <SkillHTML title={'HTML'}/>
                    <SkillCSS title={'CSS'}/>
                    <SkillJavaScript title={'JavaScript'}/>
                </div>
                <div className={s.skills}>
                    <SkillTypeScript title={'TypeScript'}/>
                    <SkillGit title={'Git'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
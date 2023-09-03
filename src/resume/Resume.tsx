import React from 'react';
import s from './Resume.module.css';
import sc from './../common/styles/Container.module.css';

const Resume = () => {
    return (
        <div className={s.resumeBlock}>
            <div className={`${sc.container} ${s.resumeContainer}`}>
                <h2 className={s.resumeTitle}>Education & <span className={s.greenSpan}>Experience</span></h2>
                <div className={s.basicBlock}>
                    <h3 className={s.underTitle}>Bachelor Degree in the study programme of Pilot</h3>
                    <p className={s.infoOfCompany}>TUKE Faculty of Aeronautics</p>
                </div>
                <div className={s.basicBlock}>
                    <h3 className={s.underTitle}>React Frontend developer(courses)</h3>
                    <p className={s.infoOfCompany}>IT - Incubator</p>
                    <h3 className={s.underTitle}>UI/UX Design</h3>
                    <p className={s.infoOfCompany}>Hillel It-School</p>
                    <h3 className={s.underTitle}>Frontend developer</h3>
                    <p className={s.infoOfCompany}>Web World studio</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
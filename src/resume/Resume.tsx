import React from 'react';
import s from './Resume.module.css';
import sc from './../common/styles/Container.module.css';

const Resume = () => {
    return (
        <div className={s.resume}>
            <div className={`${sc.container} ${s.resumeContainer}`}>
                <h2 className={s.resumeTitle}>Education & <span className={s.greenSpan}>Experience</span></h2>
                <div className={s.basicBlock}>
                    <h3 className={s.underTitle}>Bachelor Degree of Information Technology</h3>
                    <p className={s.infoOfCompany}>US RMIT University</p>
                </div>
                <div className={s.basicBlock}>
                    <h3 className={s.underTitle}>Webflow Developer & Co-Founder</h3>
                    <p className={s.infoOfCompany}>Designflow Studio</p>
                    <h3 className={s.underTitle}>Web Designer</h3>
                    <p className={s.infoOfCompany}>Freelance</p>
                    <h3 className={s.underTitle}>Leader Team of Marketing</h3>
                    <p className={s.infoOfCompany}>AHA Marketing Agency</p>
                </div>
                <div className={s.basicBlock}>
                    <h3 className={s.underTitle}>Bachelor Degree of Information Technology</h3>
                    <p className={s.infoOfCompany}>US RMIT University</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
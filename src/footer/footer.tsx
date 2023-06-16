import React from 'react';
import s from './footer.module.css'
import sc from './../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={s.resume}>
            <div className={`${sc.container} ${s.resumeContainer}`}>
            <h4>All rights are reserved</h4>
            </div>
        </div>
    );
};

export default Footer;
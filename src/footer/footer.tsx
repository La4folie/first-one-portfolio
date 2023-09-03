import React from 'react';
import s from './footer.module.css'
import sc from './../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
            <h4 className={s.text}>All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import s from "./About.module.css"
import sc from './../common/styles/Container.module.css'

const About = () => {
    return (
        <div className={s.about}>
            <div className={`${sc.container} ${s.aboutContainer}`}>
                <h2 className={s.title}>
                    Every great design begin with
                    an even <span className={s.greenSpan}>better story</span>
                </h2>
                <span className={s.text}>Since beginning my journey as a freelance
                    designer nearly 8 years ago, I've done remote work for agencies,
                    consulted for startups, and collaborated with talented people to
                    create digital products for both business and consumer use.
                    I'm quietly confident, naturally curious, and perpetually working
                    on improving my chops one design problem at a time.</span>
            </div>
        </div>
    );
};

export default About;
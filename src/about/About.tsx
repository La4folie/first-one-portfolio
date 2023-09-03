import React from 'react';
import s from "./About.module.css"
import sc from './../common/styles/Container.module.css'

const About = () => {
    return (
        <div className={s.aboutBlock}>
            <div className={`${sc.container} ${s.aboutContainer}`}>
                <h2 className={s.title}>
                    Every great design begin with
                    an even <span className={s.greenSpan}>better story</span>
                </h2>
                <span className={s.text}>Nice to meet you! I'm a junior developer who specializes
                    in building interfaces using React, TypeScript, and JavaScript. I have a strong
                    command of CSS, allowing me to create stylish and visually appealing designs.
                    I also have experience working with Figma, which enables me to develop designs for various websites.</span>
                <span className={s.text}>Additionally, I have a passion for aviation, which serves as my hobby. I frequently travel across Europe,
                    expanding my horizons and easily connecting with people from different cultures and nationalities.
                    My ability to communicate effortlessly and establish rapport with others makes me a team player and
                        a valuable member of any project.</span>
                <span className={s.text}> I take pride in my achievements in web development and design, and I strive for continuous
                    improvement of my skills and professional growth. I am seeking an opportunity to apply my knowledge and
                    experience as part of your team, working together to achieve high-quality results and create unique
                        user interfaces.</span>
            </div>
        </div>
    );
};

export default About;
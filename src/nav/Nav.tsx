import React from 'react';
import s from './Nav.module.css';
import home from "./home.png";
import user from './user.png';
import skills from './skills.png';
import resume from './resume.png';
import portfolio from './portfolio.png';
import contact from './contact.png'


const Nav = () => {
    // const changeBackground = (event:MouseEvent<HTMLButtonElement>) => {
    //     const button = event.currentTarget as HTMLButtonElement
    //     button.style.backgroundColor = 'white';
    // }
    // const [active, setActive] = useState("");
    // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    //     const element = e.currentTarget as HTMLElement;
    //     const id = element.id;
    //     setActive(id)
    // }
    return (
        <div className={s.sideNav}>
            <ul>
                <li><a href={"#homepage"}><img src={home} className={s.icon} alt={'homeIcon'}/></a></li>
                <li><a href={"#AboutPart"}><img src={user} className={s.icon} alt={'UserIcon'}/></a></li>
                <li><a href={"#SkillsPart"}><img src={skills} className={s.icon} alt={'SkillsIcon'}/></a></li>
                <li><a href={"#ResumePart"}><img src={resume} className={s.icon} alt={'ResumeIcon'}/></a></li>
                <li><a href={"#PortfolioPart"}><img src={portfolio} className={s.icon} alt={'PortfolioIcon'}/></a></li>
                <li><a href={"#ContactPart"}><img src={contact} className={s.icon} alt={'ContactIcon'}/></a></li>
            </ul>
        </div>
    );
}

export default Nav;

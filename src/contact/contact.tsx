import React from 'react';
import s from './contact.module.css'
import sc from './../common/styles/Container.module.css';

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <h2 className={s.contactTitle}>Let's Work Together!</h2>
                <form className={s.basicBlock}>
                    <p>FULL NAME*</p>
                    <input/>
                    <p>email</p>
                    <input/>
                    <p>Phone(Optional)</p>
                    <input/>
                    <p>MESSAGE</p>
                    <input title={'Write your message here'}/>
                    <div>
                        <button type='submit'>Send Message</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
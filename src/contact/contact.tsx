import React from 'react';
import s from './contact.module.css'
import sc from './../common/styles/Container.module.css';

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <h2 className={s.contactTitle}>Let's Work <span className={s.greenSpan}>Together!</span></h2>
                <form className={s.basicBlock}>
                    <p>FULL NAME*</p>
                    <input className={s.inputForm}/>
                    <p>email*</p>
                    <input className={s.inputForm}/>
                    <p>Phone(Optional)</p>
                    <input className={s.inputForm}/>
                    <p>MESSAGE</p>
                    <input title={'Write your message here'} className={s.inputForm}/>
                    <div className={s.button}>
                        <button type='submit'>Send Message</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
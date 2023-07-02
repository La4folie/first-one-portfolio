import React from 'react';
import s from './contact.module.css'
import sc from './../common/styles/Container.module.css';
import emailjs from 'emailjs-com'

const Contact = () => {


        const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            emailjs
                .sendForm('service_e9uf3wr', 'template_andn675', event.currentTarget, 'I26Z32QctDuyL20VB')
                .then((res) => {
                    console.log(res.text);
                })
                .catch((err) => {
                    console.log(err.text);
                });
        }

            return (
                <div className={s.contact}>
                    <div className={`${sc.container} ${s.contactContainer}`}>
                        <h2 className={s.contactTitle}>Let's Work <span className={s.greenSpan}>Together!</span></h2>
                        <form className={s.basicBlock} onSubmit={sendEmail}>
                            <p>FULL NAME*</p>
                            <input className={s.inputForm} type='text' name='from_name'/>
                            <p>email*</p>
                            <input className={s.inputForm} type='email' name='user_email'/>
                            <p>MESSAGE</p>
                            <textarea className={s.inputForm} name='message'/>
                            <div className={s.button}>
                                <button type='submit' value='send'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        };

        export default Contact;
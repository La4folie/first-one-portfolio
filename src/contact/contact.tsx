import React from 'react';
import s from './contact.module.css'
import sc from './../common/styles/Container.module.css';
import emailjs from 'emailjs-com'
import swal from "sweetalert";

const Contact = () => {

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs
            .sendForm('service_e9uf3wr', 'template_andn675', event.currentTarget, 'I26Z32QctDuyL20VB')
            .then((res) => {
                console.log(res)
                swal({
                    icon: "success",
                    title:'Message sent successfully'
                })
            })
            .catch((err) => {
                console.error(err)
                swal({
                    icon: "error",
                    title:"Ooops, something went wrong",
                    text: err.text
                })
            });
        event.currentTarget.reset()
    }

    return (
        <div className={s.contactBlock}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <h2 className={s.contactTitle}>Let's Work <span className={s.greenSpan}>Together!</span></h2>
                <form className={s.basicBlock} onSubmit={sendEmail}>
                    <p>Name*</p>
                    <input className={s.inputForm} required={true} type='text' name='from_name'/>
                    <p>Email*</p>
                    <input className={s.inputForm} required={true} type='email' name='user_email'/>
                    <p>MESSAGE</p>
                    <textarea className={s.inputForm} name='message'/>
                    <div className={s.sendingButton}>
                        <button type='submit' value='send'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Contact;
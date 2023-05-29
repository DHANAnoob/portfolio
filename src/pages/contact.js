import './cnt.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FaPhoneAlt,FaLocationArrow,FaEnvelope} from "react-icons/fa";

export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0h996wh', 'template_o1ddzc9', form.current, 'RI_zQs4jT-wt-7bwJ')
        .then((result) => {
            console.log(result.text);
            console.log("message sent successfully!")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            console.log("error occured")
            e.target.reset()
        });
    };
    return(
        <div className='cnt'>
            <div className='cnthead'>
                <h1>CONTACT <span style={{color:"rgba(20, 13, 13, 0.915)"}}>ME</span> </h1>
            </div>
            <div className='contactcontainer'>
                <div className='contactbox'>
                    <div className='conbox1'>
                        <div className='conInbox1'>
                            <h2>GET IN TOUCH</h2>
                            <p>If you want to get in touch with me, the best way is to send
                                me an email at the below email id. I check my email reularly, and I'll
                                get back to you as soon as posiible.
                            </p>
                        </div>
                        <div className='conInbox2'>
                            <h2><FaLocationArrow/></h2>
                            <div className='address1'>
                                <h3>ADDRESS</h3>
                                <p>Check post, Velachery, Chennai District, Chennai-600042, Tamil Nadu, India</p>
                            </div>
                        </div>
                        <div className='conInbox3'>
                        <h2><FaPhoneAlt/></h2>
                            <div className='contactnumber'>
                                <h3>CONTACT NUMBER</h3>
                                <p>+91 9080531691</p>
                            </div>
                        </div>
                        <div className='conInbox4'>
                        <h2><FaEnvelope/></h2>
                            <div className='emailid'>
                                <h3>EMAIL</h3>
                                <p>jdhanasekar1999@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='conbox2'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='inputdiv1'>
                        <input type="text" placeholder='Enter your name' name="user_name" />
                        <input type='text' placeholder='Enter your number' name='user_no'/>
                        </div>
                        <div className='inputdiv2'>
                        <input type="email" placeholder='Enter your mail id' name="user_email" />
                        <input type='text' placeholder='Enter subject' name='user_sub'/>
                        </div>
                        <div className='inputdiv3'>
                        <textarea id='textbox1' name="message" placeholder='your message' rows={10} cols={50}/>
                        <textarea id='textbox2' name="message" placeholder='your message' rows={10} cols={25}/>
                        <textarea id='textbox3' name="message" placeholder='your message' rows={10} cols={40}/>
                        </div>
                        <div className='inputdiv4'>
                        <input type="submit" value="Send" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
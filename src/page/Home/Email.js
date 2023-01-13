import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'

import './Email.css'
const Email = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfwwiwi',
      'template_fnpki6m',
      form.current,
      'YgRulTmORe8ZYcETe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      toast.success(' Send success', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      e.target.reset()
  };

  return (
    <div style={{ background: '#FBD062' }} id="emailjs">
      <div className='sm:flex sm:px-16 sm:pt-12 p-6'>


        <div className='sm:w-1/2 text-start'>
          <h2 className='text-2xl font-bold text-black pb-6'>Let us handle your<br /> project, professionally.</h2>
          <p>With well written codes, we build amazing apps <br /> for all platforms, mobile and web apps in general.</p>
        </div>

        <div className='sm:w-1/2 mt-5'>
          <form className='text-start form-style pb-12' ref={form} onSubmit={sendEmail}>
            <input className='w-full shadow-lg' type="email" name="from_email" placeholder='your email address' required/>
            <br />
            <input className='w-full shadow-lg' type="text" name="to_name" placeholder="your name/company's name" required/>
            <br />
            <textarea className='w-full shadow-lg' name="message" id="" cols="30" rows="10" placeholder='your message' />
            <input className='submit-button btn' type="submit" value="Send" required/>
          </form>
        </div>
      </div>
      <h2 className='text-xl font-bold text-black py-12 text-center'>copyright Orange labs {(new Date().getFullYear())}</h2>
    </div>
  );
};

export default Email;
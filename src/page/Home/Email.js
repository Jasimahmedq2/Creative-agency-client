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
    <div style={{ background: '#FBD062' }}>
      <div className='flex px-16 pt-12'>


        <div className='w-1/2 text-start'>
          <h2 className='text-2xl font-bold text-black pb-6'>Let us handle your<br /> project, professionally.</h2>
          <p>With well written codes, we build amazing apps <br /> for all platforms, mobile and web apps in general.</p>
        </div>

        <div className='w-1/2 '>
          <form className='text-start form-style pb-12' ref={form} onSubmit={sendEmail}>
            <input className='w-full' type="email" name="from_email" placeholder='your email address' />
            <br />
            <input className='w-full' type="text" name="to_name" placeholder="your name/company's name" />
            <br />
            <textarea className='w-full' name="message" id="" cols="30" rows="10" placeholder='your message' />
            <input className='submit-button btn' type="submit" value="Send" />
          </form>
        </div>
      </div>
      <h2 className='text-xl font-bold text-black py-12'>copyright Orange labs 2022</h2>
    </div>
  );
};

export default Email;
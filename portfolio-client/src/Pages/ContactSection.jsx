import AOS from 'aos';
import axios from 'axios';
import '../Stylesheets/ContactPage.css';
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ContactContainerBg from '../assets/ContactSectionBg.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const EmailRegex = /^[\w.%+-]{4,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const ContactSection = () => {
  const InitialFormState = {
    VisitorName: '',
    VisitorEmail: '',
    VisitorMessage: ''
  }
  const date = new Date();
  const [ErrorField, setErrorField] = useState('');
  const [FormState, setFormState] = useState(InitialFormState)
  const InputRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900
    })
  }, [])

  function handleMailClick() {
    InputRef.current.focus();
  }

  function handleInputValues(e) {
    setFormState(PreviousValue => ({ ...PreviousValue, [e.target.name]: e.target.value }));
  }
  function Validation() {
    if (FormState.VisitorName !== ''
      && FormState.VisitorEmail !== ''
      && FormState.VisitorMessage !== ''
      && EmailRegex.test(FormState.VisitorEmail)) {
      return { flag: true, Msg: 'none' };
    }
    else {
      if (FormState.VisitorName === '') return { flag: false, Msg: 'Name Field is Required', Which_Field: 'Name' };
      else if (FormState.VisitorEmail === '') return { flag: false, Msg: 'Email Field is Required', Which_Field: 'Email' };
      else if (!EmailRegex.test(FormState.VisitorEmail)) return { flag: false, Msg: 'Please Enter valid Email', Which_Field: 'Email' };
      else if (FormState.VisitorMessage === '') return { flag: false, Msg: 'Message-Field: Write Any Message.....', Which_Field: 'Message' };
    }
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    const Valid_Details = Validation();
    if (Valid_Details.flag) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}`, FormState);
        if (response.status === 200) {
          toast.success("Email Sent Successfully!!");
          setFormState(InitialFormState);
        }
        else {
          toast.warning("Error While Sending Email, code:500");
        }

      } catch (error) {
        toast.error("Request Not Sent to Server, Code: 500");
      }
    }
    else {
      toast.warning(Valid_Details.Msg);
      setErrorField(Valid_Details.Which_Field);
    }
  }
  return (
    <div id='Contact-Page'>
      <div className='position-absolute'>
        <ToastContainer />
      </div>
      <header data-aos="fade-down">
        <h1 className='fw-bold m-auto'>Contact Me</h1>
      </header>
      <div className="Form-Container">
        <div className="Contact-Section1">
          <h5 className='text-light' data-aos="zoom-in">Keep Touch with Me.</h5>
          <div className="Contact-Section-Icons" data-aos="zoom-in">
            <div className="d-flex fs-4">
              <FaLinkedin />
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="d-flex fs-4">
              <FaInstagram />
              <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="d-flex fs-4">
              <FaGithub />
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="d-flex fs-4" onClick={handleMailClick}>
              <FaEnvelope />
            </div>
          </div>
        </div>
        <div className="Contact-Section2">
          <form action="" className='Contact-Form' data-aos="fade-left" onSubmit={(e) => handleFormSubmit(e)}>
            <input
              type="text"
              ref={InputRef}
              id="VisitorName"
              name="VisitorName"
              placeholder='Enter Name'
              value={FormState.VisitorName}
              onChange={(e) => handleInputValues(e)}
              style={(ErrorField==='Name')?{border: '2.5px solid red'}:{border: 'none'}}
              />
            <input
              type="email"
              id="VisitorEmail"
              name="VisitorEmail"
              placeholder='Enter Email'
              value={FormState.VisitorEmail}
              onChange={(e) => handleInputValues(e)}
              style={(ErrorField==='Email')?{border: '2.5px solid red'}:{border: 'none'}}
              />
            <textarea
              id="VisitorMessage"
              name="VisitorMessage"
              value={FormState.VisitorMessage}
              placeholder='Write Any Message...'
              onChange={(e) => handleInputValues(e)}
              style={(ErrorField==='Message')?{border: '2.5px solid red'}:{border: 'none'}}
              />
            <input
              type="submit"
              value="Send"
              className='btn btn-primary px-4 mb-2 mx-auto fw-bold'
            />
          </form>
        </div>
        <div className='CopyRight-Card'>
          <h6 className='m-auto'>{date.getFullYear()} &copy; All Rights Reserved <br />Build by <span className='text-danger'> Gokul Krishna M</span></h6>
        </div>
        <img src={ContactContainerBg} className='Contact-Bg-Pic' alt="ContactBgPic" />
      </div>
    </div>
  )
}

export default ContactSection
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import './Contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
    useEffect(() => {
        AOS.init()
      }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Please complete the CAPTCHA');
            return;
        }

        // Process form submission
        console.log('Form data:', formData);
        console.log('CAPTCHA value:', captchaValue);

        // Clear form and CAPTCHA
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        });
        setCaptchaValue(null);
    };

    return (
        <div>
            <Breadcrumbs title='Contact Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='location' data-aos="fade-up">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.211125427655!2d72.17620547439303!3d24.269355268657446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cbdaaebaaf49f%3A0x86552f25ff42b2c8!2sKALPGIRI%20SOLAR%20POWER%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1725901868147!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact-container'>
                        <div data-aos="fade-up">
                            <h2>
                                Contact Details
                            </h2>
                            <div className='contact-detail'>
                                <span><IoLocationSharp /></span>
                                <address>
                                near LIC BUILDING, Gulbani Nagar, Deesa, Gujarat 385535

                                </address>
                            </div>
                            <div className='contact-detail'>
                                <span><IoCall /></span>
                                <ul>
                                    <li>
                                        <a>+91 9898313985</a>
                                    </li>
                                    <li>
                                        <a>+91 9662345711</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='contact-detail'>
                                <span><GiWorld /></span>
                                <ul>
                                    <li>
                                        <a>kalpgirisolarpower@gmail.com</a>
                                    </li>
                                    <li>
                                        <a>www.kalpgiri.in</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Follow Us</h2>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='contactus' data-aos="fade-up">
                            <div>
                                <h2>Get In Touch</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className='col-lg-6'>
                                    <div className='width-50'>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            placeholder='Your Name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='width-50'>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            placeholder='Your Email'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <input
                                            type='text'
                                            name="subject"
                                            value={formData.subject}
                                            placeholder='Your Subject'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <textarea
                                            cols='30'
                                            rows='10'
                                            required
                                            name="message"
                                            value={formData.message}
                                            placeholder='Your Message'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <div className='col-lg-12'>
                                        <ReCAPTCHA
                                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                            onChange={handleCaptchaChange}
                                        />
                                    </div> */}
                                    <div className='col-lg-12'>
                                    <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact

import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/kalpgiri/logo.jpg'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>KALPGIRI SOLAR POWER (P) LIMITED has been serving with its world-class domestic,institutional and industrial solar solutions across the world.</p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9898313985">+91 9898313985</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 9662345711">+91 9662345711</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Explore the way to use the Sun Energy efficiently and Free of Cost with us. Let's be a solar family. Our Mission & Vission Infinite of bringing a solar revolution by switching the mode of energy towards the solar.
                                </p>
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
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                                <li>
                                    <a href='/Services'>Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>KALPGIRI SOLAR POWER PRIVATE LIMITED
                                    </b>
                                </li>
                                <li>
                                near LIC BUILDING, Gulbani Nagar, Deesa, Gujarat 385535

                                </li>
                                <li>
                                    Gujarat(INDIA)385535
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9898313985'>+919898313985</a>&nbsp;
                                    <a href='tel:+91 9662345711'>9662345711</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:kalpgirisolarpower@gmail.com@gmail.com'>kalpgirisolarpower@gmail.com@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://kalpgiri.vercel.app'>https://kalpgiri.vercel.app</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2024-25 KALPGIRI SOLAR POWER | All Rights reserved Designed & Developed By <a href='tel:+91 9913448958'>Dilip Karnavat</a></p>
                </div>
            </footer >
        </>
    )
}

export default Footer

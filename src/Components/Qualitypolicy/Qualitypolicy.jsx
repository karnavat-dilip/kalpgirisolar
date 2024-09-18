import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { VscGraph } from "react-icons/vsc";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiSolidCertification } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import './Qualitypolicy.css'
import qualitydiagram from '../../Assets/ads2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import s1 from '../../Assets/Grid-Tie.png'
import s2 from '../../Assets/Solar-Off-Grid.png'
import s3 from '../../Assets/Solar-Panel-Image.png'
import s4 from '../../Assets/maxresdefault.jpg'
import s5 from '../../Assets/maxresdefault (1).jpg'
import { FcCustomerSupport } from "react-icons/fc";
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Qualitypolicy() {
    useEffect(() => {
        AOS.init()
    }, [])
    const productapplication = [
        {
            id: uuidv4(),
            img: s1,
            Appname: 'Residential Solar Power Plant',
            moreinfo: 'Our Residential Solar Rooftop Projects are the best and the easiest way to opt for the solar power system. We provide solar power solutions for residential which can eliminate the power bill by 100%. State and Central Government subsidies on residential solar rooftops give the fastest Return on Investment with less capital Investment. The Residential Solar plant comes with 5 years of warranty and 25 years of system life.'
        },
        {
            id: uuidv4(),
            img: s2,
            Appname: 'Commercial And Industrial Solar Rooftop System',
            moreinfo:'Our Solar Power Rooftop Solution on Commercial and Industrial is to provide a total turnkey project. Starting from roof analysis to commissioning and system maintenance, the project requires an in-depth analysis of the irradiation pattern along with its roof condition for the system to generate for its designed lifetime.'
        },
        {
            id: uuidv4(),
            img: s3,
            Appname: 'Agricultural Solar Power Plant',
            moreinfo:'Agricultural solar power plants are set up to power various farm operations, including irrigation systems, lighting, water pumping, processing units, and cooling storage. Solar energy helps mitigate the high electricity costs associated with farming activities, especially in rural or remote areas where grid access may be limited or unreliable.'
        },
        {
            id: uuidv4(),
            img: s5,
            Appname: 'Institution Solar Power Plant',
            moreinfo:'An Institutional Solar Power Plant is designed to meet the energy needs of institutions such as schools, universities, hospitals, government buildings, and non-profit organizations. These institutions often have high energy consumption due to their size and the nature of their operations, making solar power an attractive, cost-effective, and sustainable energy solution.'
        }
    ]
    return (
        <div>
            <Breadcrumbs title='Services' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='divA' data-aos="fade-up">
                        <h4 className='blinking-paragraph'>No.1 Solar System Provider & Installer in Deesa</h4>
                        <div>
                            <h3>Complete Solution of Solar Design, Engineering & Consultancy. </h3>
                        </div>
                        <div>
                            <p>
                                Your Expert Solar Design Team!
                                Residential | Commercial | Industrial | Ground Mount
                            </p>
                        </div>
                    </div>
                    <div className='divB'>
                        <h2>Our Services</h2>

                        <div>
                            <h1>What makes us the trusted name in Solar Rooftop System & Solar Panel Solutions?</h1>
                            <p><strong>Deesa Solar has been a life-enriching solution for many decades and we are constantly striving to provide possible and quality solutions that build trust with millions of people.</strong></p>
                            <p><strong>Want to buy Solar Rooftop System, Solar Rooftop Panels, Solar water pumps for your house? We at Deesa solar provide and install all types of solar panel solutions & services at the best price with lower maintenance costs.</strong></p>
                        </div>
                    </div>
                    <section data-aos="fade-up">
                        <div className='container'>
                            <div className='h1-container'>
                               
                            </div>
                            <div className='grid-container'>
                                {productapplication?.map((product, index) => {
                                    return (
                                        <div className='grid-item'>
                                            <img src={product.img} width='100'/>
                                            <h1>{product.Appname}</h1>
                                            <Accordion style={{ background: 'aliceblue', boxShadow: 'none' }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}

                                                >
                                                    More Info
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {product.moreinfo}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                <div className='CustomerSupport' data-aos="fade-up">
                    <div><FcCustomerSupport style={{fontSize: '-webkit-xxx-large'}}/></div>
                    <div>
                        <h5>Do You Still Have A Question Regarding Our Services?</h5>
                        <p>To know more about our services, please contact us.</p>
                    </div>
                    <div>
                        <a href='/contact'>Contact us</a>
                    </div>
                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </div>
    )
}

export default Qualitypolicy

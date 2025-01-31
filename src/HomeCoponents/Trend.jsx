import React, { useState } from 'react';
import { CModal, CModalBody, CModalHeader, CContainer } from '@coreui/react';
import Slider from 'react-slick';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';
import img8 from '../assets/8.webp';
import img9 from '../assets/9.webp';
import img10 from '../assets/10.webp';
//newImage
import img01 from '../assets/01.webp';
import imgtext from '../assets/01-text.webp';
import img02 from '../assets/02.webp';
import img2text from '../assets/02-text.webp';
import img03 from '../assets/03.webp';
import img3text from '../assets/03-text.webp';
import img04 from '../assets/04.webp';
import img4text from '../assets/04-text.webp';
import img05 from '../assets/05.webp';
import img5text from '../assets/05-text.webp';
import img06 from '../assets/06.webp';
import img6text from '../assets/06-text.webp';
import img07 from '../assets/07.webp';
import img7text from '../assets/07-text.webp';
import img08 from '../assets/08.webp';
import img8text from '../assets/08-text.webp';
import img09 from '../assets/09.webp';
import img9text from '../assets/09-text.webp';
import img010 from '../assets/010.webp';
import img10text from '../assets/010-text.webp';
import { Link } from 'react-router-dom';

export const Trend = () => {
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        className: "center",
        centerMode: true,
        autoplay: true,
        speed: 500,
        centerPadding: "50px",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    className: "center",
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "50px",
                    className: "center",
                    centerMode: true,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "80px",
                    className: "center",
                    centerMode: true,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // mockData
    const mockData = [
        { img: img1, id: 1 },
        { img: img2, id: 2 },
        { img: img3, id: 3 },
        { img: img4, id: 4 },
        { img: img5, id: 5 },
        { img: img6, id: 6 },
        { img: img7, id: 7 },
        { img: img8, id: 8 },
        { img: img9, id: 9 },
        { img: img10, id: 10 }
    ];

    // Modal Content Data
    const modalContentInfo = [
        {
            id: 1,
            img1: img01,
            img2: imgtext,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },

        {
            id: 2,
            img1: img02,
            img2: img2text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 3,
            img1: img03,
            img2: img3text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 4,
            img1: img04,
            img2: img4text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 5,
            img1: img05,
            img2: img5text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 6,
            img1: img06,
            img2: img6text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 7,
            img1: img07,
            img2: img7text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 8,
            img1: img08,
            img2: img8text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 9,
            img1: img09,
            img2: img9text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        {
            id: 10,
            img1: img010,
            img2: img10text,
            links: [
                { text: 2024 },
                { text: '⁨U/A 16+' },
                { text: 'Movie' },
                { text: 'Action' },
                { text: 'Romance' },
                { text: 'Dramas' },
            ],
            para:
                'Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.',
            button: [{ text: 'Get Started', to: '/' }],
        },
        // Add other items similarly
    ];

    // Open Modal and set selected item content
    const openModal = (itemId) => {
        const selectedContent = modalContentInfo.find(item => item.id === itemId);
        setSelectedItem(selectedContent);
        setVisible(true);
    };

    return (
        <section className="-mt-6 pb-[50px] trend relative z-20" style={{ background: "radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), #000000;" }}>
            <CContainer>
                <h2 className="pb-8 text-white font-bold" style={{ fontSize: "28px" }}> Trending Now</h2>
                <Slider {...settings} className="flex justify-center align-middle text-center">
                    {mockData.map((item, index) => (
                        <div key={index} onClick={() => openModal(item.id)}>
                            <div className="mr-[35px] relative trend-box">
                                <img src={item.img} alt="" style={{ borderRadius: "8px" }} className="relative" />
                                <h3 className="heading">{item.id}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </CContainer>

            {/* Modal */}
            <CModal
                alignment="center"
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredScrollableExample2"
            >
                <CModalHeader className="absolute top-[4%] right-[4%] shadow-2xl z-50 border-0"></CModalHeader>
                <CModalBody>
                    {selectedItem ? (
                        <div>
                            <div className="bodyimg">
                                <img src={selectedItem.img1} alt="" className="w-full object-cover relative" style={{width: "100%", height: "350px", objectFit: "cover"}} />
                                <img src={selectedItem.img2} alt="" className="w-[57%] h-[120px] object-contain absolute  top-[70%] right-[40%] z-20" />
                            </div>
                            <div>
                                <ul className="flex flex-wrap">
                                    {selectedItem.links.map((link, idx) => (
                                        <li
                                            key={idx}
                                            className="font-medium capitalize py-1 px-1 md:px-2 mr-2 text-[rgba(255,255,255,.7)] mb[10px] md:mb-[10px]"
                                            style={{
                                                fontSize: '0.875rem',
                                                borderRadius: '5px',
                                                background: 'rgb(65, 65, 65)',
                                            }}
                                        >
                                            {link.text}
                                        </li>
                                    ))}
                                </ul>
                                <p>{selectedItem.para}</p>
                                {selectedItem.button.map((btn, ind) => (
                                    <button
                                        key={ind}
                                        className="bg-red-600 inline-block px-4 h-full text-white"
                                        style={{
                                            paddingTop: '12px',
                                            paddingBottom: '12px',
                                            fontSize: '18px',
                                            textTransform: 'capitalize',
                                            fontWeight: '700',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <Link to={btn.to} className="text-white" style={{ textDecoration: "none" }}>
                                            {btn.text}
                                        </Link>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </CModalBody>
            </CModal>
        </section>
    );
};

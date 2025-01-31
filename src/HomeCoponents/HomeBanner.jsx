import { CCol, CContainer, CRow } from "@coreui/react";
import logo from '../assets/Logonetflix.png';
import { CFormSelect } from '@coreui/react';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";

export const HomeBanner = () => {
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("en");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
    };

    const content = {
        en: {
            title: "Unlimited movies, TV shows and more",
            subtitle: "Starts at ₹149. Cancel at any time.",
            description: "Ready to watch? Enter your email to create or restart your membership.",
            buttonText: "Get Started",
            signIn: "Sign In",
            languageLabel: "English"
        },
        hi: {
            title: "असीमित फिल्में, टीवी शो और अधिक",
            subtitle: "₹149 से शुरू। किसी भी समय रद्द करें।",
            description: "देखने के लिए तैयार? अपनी सदस्यता बनाने या पुनः शुरू करने के लिए अपना ईमेल दर्ज करें।",
            buttonText: "शुरू करें",
            signIn: "साइन इन करें",
            languageLabel: "हिन्दी"
        }
    };

    return (
        <section className="pt-[15px] homebanner">
            <CContainer>
                <div className="flex justify-between">
                    <div>
                        <img src={logo} alt="Logo" className="w-[130px] md:w-[180px]" />
                    </div>
                    <div className="flex">
                        <div className="mr-3">
                            <CFormSelect 
                                aria-label="Default select example" 
                                onChange={(e) => setLanguage(e.target.value)}
                                value={language}
                            >
                                <option value="en">English</option>
                                <option value="hi">हिन्दी</option>
                            </CFormSelect>
                        </div>
                        <div>
                            <button className="bg-red-600 font-bold capitalize py-2 px-3" style={{ borderRadius: "7px" }}>
                                <Link to="/sign-in" className="text-white outline-0" style={{ textDecoration: "none" }}>
                                    {content[language].signIn}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <CRow className="mb-[70px]">
                    <CCol lg={12} className="flex flex-col justify-center align-middle">
                        <div className="text-center pt-[100px] md:pt-[160px] text-white">
                            <h2 className="w-full md:w-[50%] block mx-auto" style={{ fontSize: "3.5rem", fontWeight: "900" }}>
                                {content[language].title}
                            </h2>
                            <h4 className="pt-3 pb-2">{content[language].subtitle}</h4>
                            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                                {content[language].description}
                            </p>
                            <form onSubmit={handleSubmit} className="flex justify-center">
                                <input 
                                    type="email" 
                                    value={email} 
                                    placeholder="Email Address" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="w-[40%] py-[10px] text-white" 
                                    style={{ paddingTop: "14px", paddingBottom: "14px", marginRight: "10px" }} 
                                />
                                <button className="bg-red-600 inline-block px-4 h-full text-white" 
                                    style={{ paddingTop: "14px", paddingBottom: "14px", fontSize: "18px", textTransform: "capitalize", fontWeight: "700", borderRadius: "8px" }}>
                                    {content[language].buttonText}
                                </button>
                            </form>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
            <div className="mainbox">
                <div className="bannerbefore"></div>
                <div className="default-ltr-cache-jtcpfi"></div>
            </div>
        </section>
    );
};

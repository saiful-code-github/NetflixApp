import { CCol, CContainer, CRow,CFormSelect } from "@coreui/react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const Footer = () =>{
  const [scroll, scrollTop] = useState(false);
  const [language, setLanguage] = useState("en");
    const footerSections = [
        {
          title: {en: "FAQ", hi: "सामान्य प्रश्न"},
          links: [
            { text: {en: "Investor Relations", hi: "निवेशक संबंध"}, to: "#" },
            { text: {en: "Privacy", hi: "गोपनीयता"}, to: "#" },
            { text: { en: "Speed Test", hi: "स्पीड टेस्ट"}, to: "#" },
          ],
        },
        {
          title:{ en: "Help Centre", hi:"मदद केंद्र" },
          links: [
            { text: { en: "Jobs" , hi: "नौकरियाँ"}, to: "#" },
            { text: {en: "Cookie Preferences", hi: "कुकी प्राथमिकताएँ"}, to: "#" },
            { text: {en: "Legal Notices", hi: "कानूनी नोटिस"}, to: "#" },
          ],
        },
        {
          title: {en: "Account", hi : "खाता"},
          links: [
            { text: {en: "Ways to Watch", hi: "देखने के तरीके"}, to: "#" },
            { text: {en: "Corporate Information", hi: "कॉर्पोरेट जानकारी"}, to: "#" },
            { text: {en : "Only on Netflix", hi: "केवल नेटफ्लिक्स पर"}, to: "#" },
          ],
        },
        {
          title: {en: "Media Centre", hi: "मीडिया केंद्र"},
          links: [
            { text: {en: "Terms of Use", hi: "उपयोग की शर्तें"}, to: "#" },
            { text: {en: "Contact Us", hi: "हमसे संपर्क करें"}, to: "#" },
          ],
        },
      ];
      // handleClick
      const handleClick = () =>{
          window.scrollTo({
            top:0,
            behavior: "smooth"
          }) 
      }
      const scrollUpToBottom = () =>{
         if(window.scrollY > 250){
          scrollTop(true)
         }else {
          scrollTop(false)
         }
      }

    useEffect(()=>{
        window.addEventListener('scroll', scrollUpToBottom );
        return () => window.removeEventListener('scroll', scrollUpToBottom)
    },[])
    return (
        <footer className="iconinfo pt-[10px] pb-[80px]">
            <CContainer>
                 <p style={{color: "rgba(255,255,255,.7)"}}>{language === "en" ? "Questions?" : "प्रश्न?"}   <span style={{fontSize: "17px"}}>{language === "en" ? "Call" : "कॉल"}</span><Link to="tel:000-001-002-003"
                   style={{color: "rgba(255,255,255,.7)",fontSize: "17px"}}> 000-001-002-003</Link></p>
                    <CRow>
                        {footerSections.map((section, index) => (
                            <CCol lg={3} key={index}>
                            <div>
                                <h4>
                                <Link>{section.title[language]}</Link>
                                </h4>
                                <ul>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                    <Link to={link.to}>{link.text[language]}</Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </CCol>
                        ))}
                        </CRow>
                   <CRow>
                       <CCol lg={2} className="w-[25%]">
                           <div className="mr-3 mt-6" >
                            <CFormSelect aria-label="Default select example" value={language} onChange={(e)=> setLanguage(e.target.value)}>
                            <option value="en">English</option>
                            <option value="hi">हिन्दी</option>
                            </CFormSelect>
                            </div>
                            <p  style={{fontSize: "17px", color: "rgba(255,255,255,.7)", marginTop: "30px"}}>{language === "en" ? "Netflix India" : "नेटफ्लिक्स इंडिया"}</p>
                       </CCol>
                   </CRow>
            </CContainer>
            {/* scroll top to bottom  */}
            {
              scroll && (
                <div onClick={handleClick} className="fixed bottom-[35px] right-[35px] z-50 cursor-pointer bg-red-700 text-center py-[12px] px-3 shadow-2xl" style={{borderRadius: "5px"}}>
                  <div className="animate-bounce"> <i className="bi bi-arrow-up text-white" style={{fontSize: "20px"}}></i></div>
            </div>
              )
            }
        </footer>
    )
}
import { CCol, CContainer, CRow } from "@coreui/react"
import { useState } from "react";

export const Subscribe = () =>{
     const [email, setEmail] = useState("");
        //hanldeSubmit
        const hanldeSubmit = (e) =>{
            e.preventDefault();
            setEmail("")
        }
    return(
        <section className="iconinfo pt-[50px] pb-[50px]">
            <CContainer>
                 <CRow>
                    <CCol lg={12}>
                    <p className="text-center text-white" style={{fontSize: "18px", marginBottom: "10px"}}>Ready to watch? Enter your email to create or restart your membership.
                     </p>
                    <form onSubmit={hanldeSubmit} className="flex justify-center">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)} className="w-[40%] py-[10px] text-white" style={{paddingTop:"14px", paddingBottom: "14px",marginRight: "10px"}}/>
                        <button className="bg-red-600 inline-block px-5 h-full text-white" style={{paddingTop: "14px", paddingBottom: "14px", fontSize: "18px",textTransform: "capitalize",fontWeight: "700", borderRadius: "8px"}}>Get Started</button>
                    </form>
                    </CCol>
                 </CRow>
            </CContainer>
        </section>
    )
}
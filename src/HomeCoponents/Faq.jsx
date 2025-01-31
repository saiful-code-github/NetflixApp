import { CCol, CContainer, CRow } from "@coreui/react";
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';

export const Faq = () => {
    return (
        <section className="iconinfo">
            <CContainer>
                <h2 className="pb-3 pt-10 text-white font-bold" style={{fontSize: "28px"}}>Frequently Asked Questions
                </h2>
                <CRow>
                    <CCol lg={12}>
                        <CAccordion flush>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>What is Netflix?</CAccordionHeader>
                                <CAccordionBody>
                                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader>How much does Netflix cost?</CAccordionHeader>
                                <CAccordionBody>
                                    <p>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader>Where can I watch?</CAccordionHeader>
                                <CAccordionBody>
                                    <p>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>
                                    You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={4}>
                                <CAccordionHeader>How do I cancel?</CAccordionHeader>
                                <CAccordionBody>
                                   <p>
                                   Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                   </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={5}>
                                <CAccordionHeader>What can I watch on Netflix?</CAccordionHeader>
                                <CAccordionBody>
                                    <p>
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={6}>
                                <CAccordionHeader>Is Netflix good for kids?</CAccordionHeader>
                                <CAccordionBody>
                                    <p>
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>
                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </CCol>
                </CRow>
            </CContainer>
        </section>
    )
}
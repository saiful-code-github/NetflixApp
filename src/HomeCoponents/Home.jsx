import { Faq } from "./Faq"
import { Footer } from "./Footer"
import { HomeBanner } from "./Homebanner"
import { IconInfo } from "./IconInfo"
import { Subscribe } from "./Subscribe"
import { Trend } from "./Trend"

export const Home = () =>{
    return (
        <section>
              {/* home banner section  */}
              <HomeBanner/>
              {/* Trending Now */}
              <Trend/>
              {/* icon info */}
              <IconInfo/>
              {/* Faq */}
              <Faq/>
              {/* subscribe */}
              <Subscribe/>
              {/* Footer */}
              <Footer/>
        </section>
    )
}
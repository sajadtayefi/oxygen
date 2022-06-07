import React from "react";
import TopBar from "../component/TopBar";
import GetStart from "../component/GetStart";
import WebSite from "../component/WebSite"
import Applicion from "../component/Applicion"
import Social from "../component/Social"
import Guide from "../component/Guide";
import Professional from "../component/Professional";
import Travel from "../component/Travel"
import Services from "../component/Services";
import Conversation from "../component/Conversation"
import Question from "../component/Question"
import Request from "../component/Request"
import Footer from "../component/Footer";


export default function Home() {
    return (
        <div className="   ">
            <div className=" container  background  ">
                <TopBar />
                <GetStart />
                <WebSite />
                <Applicion />
                <Social />
                <Guide />
                <Professional />
                <Travel />
                <Services />
                <Conversation />
                <Question />
                <Request />
                <Footer/>
            </div>
        </div>
    )
}
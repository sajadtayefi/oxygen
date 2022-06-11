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
        <div className=" font-Peyda-Medium bg-backgroundpage bg-no-repeat bg-cover bg-center  flex justify-center items-center flex-col mx-auto   ">
            <div className=" container mx-auto px-4    ">
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
import React from "react";
import TopBar from "../component/TopBar";
import "../index.css";
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


export default function Home() {
    return (
        <div className=" container  md:max-w-screen-xl     background-gradient-rtl">
            <TopBar />
            <GetStart />
            <WebSite />
            <Applicion/>
            <Social/>
            <Guide/>
            <Professional/>
            <Travel/>
            <Services/>
            <Conversation/>
            <Question/>
            <Request/>
        </div>

    )
}
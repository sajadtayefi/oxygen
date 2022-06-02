import React from "react";
import TopBar from "../component/TopBar";
import "../index.css";
import GetStart from "../component/GetStart";
import WebSite from "../component/WebSite"
import Applicion from "../component/Applicion"
import Social from "../component/Social"


export default function Home() {
    return (
        <div className=" Container background-gradient-rtl">
            <TopBar />
            <GetStart />
            <WebSite />
            <Applicion/>
            <Social/>
            
        </div>

    )
}
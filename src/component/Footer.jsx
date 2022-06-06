import React from "react";
import "../index.css"
import onlinechat from "../Assets/Icon/Group 4312.png"
import background from "../Assets/Picture/Mask Group 1.png"
import footer from "../Assets/Picture/Group 4810.png"


export default function Footer() {
    return (
        <div className="flex flex-col w-full ">
            <div className=" self-end">
                <img src={onlinechat} alt="online" />
            </div>
            <div>
                <div className=" p-5">
                    <img src={footer} alt="footer" />
                </div>
            </div>
        </div>
    )
}
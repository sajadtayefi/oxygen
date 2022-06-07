import React from "react";
import onlinechat from "../Assets/Icon/Group 4312.png"
import footer from "../Assets/Picture/Group 4810.png"


export default function Footer() {
    return (
        <div className="flex flex-col w-full mt-40 ">
            <div className=" w-28 m-10 self-end">
                <img src={onlinechat} alt="online" />
            </div>
            <div className="mt-20 m-5">
                <div className=" p-5">
                    <img src={footer} alt="footer" />
                </div>
            </div>
        </div>
    )
}
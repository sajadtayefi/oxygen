import React from "react";
import onlinechat from "../Assets/Icon/Group 4312.png"
import ArrowUp from "../Assets/Icon/Group 4839.png"
import zarinpal from "../Assets/Icon/00000.png"
import etemad from "../Assets/Icon/enamad_icon_color_white_1024.png"
import facebook from "../Assets/Icon/Path 1998.png"
import instagram from "../Assets/Icon/Path 1999.png"
import youtube from "../Assets/Icon/Path 2001.png"
import twitter from "../Assets/Icon/Path 2000.png"




export default function Footer() {
    return (
        <div className="flex flex-col w-full lg:mt-40 text-white ">
            <div className=" w-28 m-10 self-end">
                <img src={onlinechat} alt="online" />
            </div>
            <div className="mt-20 m-5 ">
                <div className="  background2 flex flex-col justify-center items-center rounded-3xl  p-5">
                    <div className=" flex  justify-center">
                        <img className=" -translate-y-16 absolute" src={ArrowUp} alt="arrow up" />
                    </div>
                    <div className="m-14 w-full  ">
                        <ul className=" flex flex-col md:flex-row w-full justify-around md:items-center   text-right items-start">
                            <li className="flex flex-col ">
                                <span className=" text-2xl m-2">
                                     فروشگاه اینترنتی اکسیژن
                                </span>
                                <div className=" flex flex-col">
                                    <span className="font-bold m-2">
                                        اکسیژن یک مرکز خرید و فروش آنلاین کالاست که خدمات خود را به صورت
                                    </span>
                                    <span className="font-bold m-2">
                                        رایگان ارائه می نماید. هم اکنون بیش از 10,000 فروشگاه از سراسر ایران
                                    </span>
                                    <span className="font-bold m-2">
                                        در حال فعالیت در اکسیژن می باشند.
                                    </span>
                                </div>
                            </li>
                            <li className="flex flex-col ">
                                <span className="m-2 text-2xl">
                                    کسب و کار های بزرگ
                                </span>
                                <div className=" flex flex-col">
                                    <span className=" font-bold m-2">
                                        شرایط بازگشت محصول
                                    </span>
                                    <span className="font-bold m-2">
                                        حریم خصوصی
                                    </span>
                                    <span className="font-bold m-2">
                                        کسب و کار
                                    </span>
                                </div>
                            </li>
                            <li className="flex flex-col ">
                                <span className="m-2 text-2xl">
                                    خدمات اختصاصی
                                </span>
                                <div className=" flex flex-col">
                                    <span className="font-bold m-2">
                                        شرایط بازگشت محصول
                                    </span>
                                    <span className="font-bold m-2">
                                        حریم خصوصی
                                    </span>
                                    <span className="font-bold	 m-2">
                                        کسب و کار
                                    </span>
                                </div>
                            </li>
                            <li className=" flex flex-col justify-center items-center">
                                <img className="m-2 " src={zarinpal} alt="" />
                                <img className="m-2 mt-10" src={etemad} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className=" flex  self-start mb-20 md:mr-10 " >
                        <ul className="flex flex-row w-full justify-center   items-center ">
                            <li className=" border-l-2 "> <img className=" mx-5" src={youtube} alt="" /></li>
                            <li className="border-l-2"> <img className=" mx-5" src={twitter} alt="" /></li>
                            <li className="border-l-2"> <img className=" mx-5" src={instagram} alt="" /></li>
                            <li className=" "> <img className=" mx-5" src={facebook} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import user from "../Assets/Icon/Group 7.png"
import dot from "../Assets/Icon/Ellipse 1.png"
import menu from "../Assets/Icon/menu.png"
import close from "../Assets/Icon/close.png"




// <<---header--->>

export default function TopBar() {
    const [navbar, setNavbar] = useState(false);
    const toggleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <section>
            <div className={navbar ? " flex flex-col justify-end items-end text-right    " : " transition-all delay-300 w-full hidden  xl:flex xl:flex-row "}>
                <img onClick={toggleNavbar} className={navbar ? " w-6 mr-6 mt-8   cursor-pointer" : "hidden"} src={close} alt="" />
                <button className={navbar ? " relative btn-background items-center justify-center h-12 rounded-xl  w-40 flex p-2 flex-row m-7"
                    : "  relative btn-background items-center justify-center h-12 rounded-xl xl:absolute w-40 flex p-2 flex-row m-7 "}>
                    <span className=" text-cyan-50 self-center w-28 ">
                        ورود / ثبت نام
                    </span>
                    <img className="w-4" src={user} alt="user" />
                </button>
                <ul className={navbar ? "flex mb-10 pb-4 p-2 mr-6  space-y-5 text-right  rounded-xl  xl:flex flex-col justify-center"
                    : " xl:flex flex-row-reverse m-10 justify-center items-center w-full  space-x-2"}>

                    <li className=" w-auto flex justify-center  items-center   xl:justify-between text-blue-500  " >
                        <span className=" xl:mx-10">
                            صفحه اصلی
                        </span>
                        <img className={navbar ? " absolute ml-12  " : " absolute ml-14 mt-6 "} src={dot} alt="active" />
                    </li>
                    <li className="  w-auto">
                        <span className="mx-10">
                            خدمات
                        </span>
                    </li>
                    <li className=" w-auto ">
                        <span className="mx-10">
                            فروشگاه ها
                        </span>
                    </li>
                    <li className=" w-auto ">
                        <span className="mx-10">
                            وبلاگ
                        </span>
                    </li>
                    <li className=" w-auto  ">
                        <span className="mx-10">
                            ارتباط با ما
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row  justify-end">
                <button
                    onClick={() => setNavbar(!navbar)}
                    className={navbar ? " hidden" : " cursor-pointer text-white my-8 self-end  w-40  xl:hidden flex  flex-row justify-end"}
                >
                    <img className=" self-center" onClick={toggleNavbar} src={menu} alt="" />
                </button>
            </div>
            {/* <BarItems
                toggleNavbar={toggleNavbar}
                navbar={navbar}
            /> */}
        </section>
    )
}
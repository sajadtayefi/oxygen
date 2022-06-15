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
        <div className="">
            <div className=" w-{100px} justify-center relative  hidden  xl:flex xl:flex-row ">
                <ul className={navbar ? " hidden"
                    : " xl:flex flex-row-reverse m-10 justify-center items-center   space-x-2"}>
                    <button className=" left-2  btn-background items-center justify-center h-12 rounded-xl absolute w-40 flex p-2 flex-row m-7 ">
                        <span className=" text-cyan-50 self-center w-28 ">
                            ورود / ثبت نام
                        </span>
                        <img className="w-4" src={user} alt="user" />
                    </button>

                    <li className=" w-auto flex justify-center  items-center   xl:justify-between text-blue-500  " >
                        <span className=" xl:mx-10">
                            صفحه اصلی
                        </span>
                        <img className="" src={dot} alt="active" />
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
            <div className=" xl:hidden overflow-hidden">
                <ul className={navbar ? " absolute left-0  bg-white  flex flex-col justify-start z-10  items-center h-full w-full    transition-all ease-in delay-500 space-x-2  "
                    : "absolute -left-full bg-white  flex flex-col justify-start items-center h-full w-full   transition-all ease-in delay-500 space-x-2  "}>
                    <button className="  btn-background items-center justify-center h-12 rounded-xl  w-40 flex p-2 flex-row m-7 ">
                        <span className=" text-cyan-50 self-center w-28 ">
                            ورود / ثبت نام
                        </span>
                        <img className="w-4" src={user} alt="user" />
                    </button>

                    <li className=" w-auto flex justify-center p-2 m-7   items-center   xl:justify-between text-blue-500  " >
                        <span className=" xl:mx-10">
                            صفحه اصلی
                        </span>
                        <img className=" absolute ml-24" src={dot} alt="active" />
                    </li>
                    <li className="  w-auto p-2 m-7">
                        <span className="mx-10">
                            خدمات
                        </span>
                    </li>
                    <li className=" w-auto p-2 m-7">
                        <span className="mx-10">
                            فروشگاه ها
                        </span>
                    </li>
                    <li className=" w-auto p-2 m-7">
                        <span className="mx-10">
                            وبلاگ
                        </span>
                    </li>
                    <li className=" w-auto  p-2 m-7">
                        <span className="mx-10">
                            ارتباط با ما
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row  justify-end ">
                <div onClick={toggleNavbar} className=" flex xl:hidden m-10 z-20 cursor-pointer ">
                    {navbar ? <img src={close} /> : <img src={menu} />}

                </div>
            </div>

        </div>
    )
}
import React from "react";
import ".././index.css";
import btnB from "../Assets/Icon/Mask Group 9.png";
import { BiUser } from "react-icons/bi";


// <<---header--->>

export default function TopBar() {
    return (
        <section>
            <div className=" w-full flex flex-row ">
                <button className=" absolute background-image justify-center h-12 rounded-xl w-40 flex p-2 flex-row m-10 ">
                    <span className=" text-cyan-50 self-center felx m-1  ">
                        ورود/ثبت نام
                    </span>
                    <BiUser className=" text-white  self-center" />
                </button>
                <ul className="flex flex-row-reverse m-10 justify-center items-center w-full ">
                    <li className="m-2 w-auto " >
                        <span className="mx-10">
                            صفحه اصلی
                        </span>
                    </li>
                    <li className="m-2  w-auto">
                        <span className="mx-10">
                            خدمات
                        </span>
                    </li>
                    <li className="m-2 w-auto ">
                        <span className="mx-10">
                            فروشگاه ها
                        </span>
                    </li>
                    <li className="m-2 w-auto ">
                        <span className="mx-10">
                            وبلاگ
                        </span>
                    </li>
                    <li className="m-2 w-auto  ">
                        <span className="mx-10">
                            ارتباط با ما
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
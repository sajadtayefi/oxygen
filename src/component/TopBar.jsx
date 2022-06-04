import React from "react";
import ".././index.css";
import btnB from "../Assets/Icon/Mask Group 9.png";
import user from "../Assets/Icon/Group 7.png"


// <<---header--->>

export default function TopBar() {
    return (
        <section>
            <div className=" w-full flex flex-row ">
                <button className=" absolute background-image items-center justify-center h-12 rounded-xl w-40 flex p-2 flex-row m-10 ">
                    <span className=" text-cyan-50 self-center w-28 ">
                        ورود / ثبت نام
                    </span>
                    <img className="w-4" src={user} alt="user" />
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
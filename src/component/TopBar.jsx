import React from "react";
import user from "../Assets/Icon/Group 7.png"
import dot from "../Assets/Icon/Ellipse 1.png"


// <<---header--->>

export default function TopBar() {
    return (
        <section>
            <div className=" w-full flex flex-row ">
                <button className=" absolute btn-background items-center justify-center h-12 rounded-xl w-40 flex p-2 flex-row m-10 ">
                    <span className=" text-cyan-50 self-center w-28 ">
                        ورود / ثبت نام
                    </span>
                    <img className="w-4" src={user} alt="user" />
                </button>
                <ul className="flex flex-row-reverse m-10 justify-center items-center w-full ">
                    <li className="m-2 w-auto flex flex-col justify-between  items-center text-blue-500  " >
                        <span className="mx-10 self-center">
                            صفحه اصلی
                        </span>
                        <img className=" absolute mt-5 w-10" src={dot} alt="active" />
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
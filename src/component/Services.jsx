import React from "react";
import "../index.css"
import service from "../Assets/Picture/service.png"
import pic1 from "../Assets/Icon/1.png"
import pic2 from "../Assets/Icon/2.png"
import pic3 from "../Assets/Icon/3.png"
import pic4 from "../Assets/Icon/4.png"
import pic5 from "../Assets/Icon/5.png"
import pic6 from "../Assets/Icon/6.png"
import pic7 from "../Assets/Icon/7.png"
import pic8 from "../Assets/Icon/8.png"
import pic9 from "../Assets/Icon/9.png"
import pic10 from "../Assets/Icon/10.png"
import pic11 from "../Assets/Icon/11.png"
import pic12 from "../Assets/Icon/12.png"
import pic13 from "../Assets/Icon/13.png"
import pic14 from "../Assets/Icon/14.png"
import pic15 from "../Assets/Icon/15.png"



export default function Services() {
    return (
        <div className="flex flex-col w-full justify-center items-center mt-40 p-20">
            <div className="top-picture">
                <img className="" src={service} alt="service" />
            </div>
            <div className="mt-32">
                <ul className="flex flex-row w-full justify-center items-end flex-wrap ">
                    <li className=" flex flex-col items-center justify-end ">
                        <img className="" src={pic1} alt="pic" />
                        <span className=" -translate-y-10">مدیریت کاربران</span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic2} alt="pic" />
                        <span className=" -translate-y-10">سبد خرید </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic3} alt="pic" />
                        <span className=" -translate-y-10">اتصال دامنه </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic4} alt="pic" />
                        <span className=" -translate-y-10">گوگل مپ </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic5} alt="pic" />
                        <span className=" -translate-y-10"> جستجوی حرفه ای</span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic6} alt="pic" />
                        <span className=" -translate-y-10">مدیریت فروش  </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic7} alt="pic" />
                        <span className=" -translate-y-10">گزارش گیری</span>

                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic8} alt="pic" />
                        <span className=" -translate-y-10">رایگان ssl  </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic9} alt="pic" />
                        <span className=" -translate-y-10"> شخصی سازی</span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic10} alt="pic" />
                        <span className=" -translate-y-10">صفحات داخلی </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic11} alt="pic" />
                        <span className=" -translate-y-10"> چت آنلاین </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic12} alt="pic" />
                        <span className=" -translate-y-10"> امنیت بالا</span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic13} alt="pic" />
                        <span className=" -translate-y-10"> درگاه پرداخت</span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic14} alt="pic" />
                        <span className=" -translate-y-10">دسته بندی محصولات </span>
                    </li>
                    <li className=" flex flex-col justify-center items-center">
                        <img src={pic15} alt="pic" />
                        <span className=" -translate-y-10">ستون خودکار </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
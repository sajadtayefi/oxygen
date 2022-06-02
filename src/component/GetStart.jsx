import React from "react";
import "../index.css"
import background from "../Assets/Picture/Mask Group 1.png"
import girlpic from "../Assets/Picture/Group 4831.png"
import boypic from "../Assets/Picture/22.png"
import mouse from "../Assets/Icon/mouse.png"
import polygon from "../Assets/Icon/Polygon 1.png"


export default function GetStart() {
    return (
        <div className="Container w-full flex flex-col items-center ">
            <img className="relative p-10 w-screen height  " src={background} alt="background" />
            <div className=" w-full absolute rounded-3xl flex flex-col   justify-center items-center  text-white " >
                <div className="">
                    <h2 className="m-auto mt-24 Peyda-Bold text-3xl font-face ">
                        اکسیژن بهترین روش برای یک شروع عالی در کسب و کار !
                    </h2>
                    <div className="m-auto my-10 text-center">
                    <p className="m-5">
                        ساخت فروشگاه ساز بدون نیاز به دانش برنامه‌نویسی،
                        با کمترین زمان و هزینه یک خدمات
                    </p>
                    <p>
                        عالی بسازید و کاربران خود را شگفت ‌زده کنید  …
                    </p>
                    </div>
                </div>
                <div className="flex flex-row justify-center   ">
                    <img className=" width-girl -translate-x-36	" src={girlpic} alt="image" />
                    <div className="flex flex-col justify-between">
                        <button className="border-2 w-60 rounded-xl p-2 self-start">
                            <span>
                                همین الان شروع کنید !
                            </span>
                        </button>
                        <div className=" -translate-y-56 flex flex-col justify-center items-center self-center bottom-0 ">
                            <img className=" relative" src={polygon} alt="polygon" />
                            <img className=" absolute w-10" src={mouse} alt="mouse" />
                        </div>
                    </div>
                    <img className=" width-boy translate-x-32 -translate-y-28   " src={boypic} alt="image" />
                </div>

            </div>
        </div>
    )
}
import React from "react";
import background from "../Assets/Picture/Mask Group 1.png"
import girlpic from "../Assets/Picture/Group 4831.png"
import boypic from "../Assets/Picture/22.png"
import mouse from "../Assets/Icon/mouse.png"
import polygon from "../Assets/Icon/Polygon 1.png"


export default function GetStart() {
    return (
            <div className=" text-white sm:w-full w-auto bg-background bg-center bg-no-repeat  bg- flex flex-col items-center justify-center rounded-3xl ">
                <div className=" flex flex-col  items-center text-right mt-10 w-full  ">
                    <h3 className="m-10   sm:w-auto font-Peyda-ExtraBold text-4xl ">
                        اکسیژن  بهترین  روش  برای یک  شروع  عالی  در  کسب  و  کار   !
                    </h3>
                    <p className="my-10 md:w-auto  sm:w-40 ">
                        ساخت فروشگاه ساز بدون نیاز به دانش برنامه‌نویسی،  با کمترین زمان و هزینه یک خدمات  360
                    </p>
                    <p className=" md:w-auto sm:w-40">
                        عالی بسازید و کاربران خود را شگفت ‌زده کنید  …
                    </p>
                    <button className="p-2 mt-10 border-2 rounded-md w-40 sm:w-auto">
                        <span>
                            همین حالا شروع کنید
                        </span>
                    </button>
                </div>
                <div className="flex flex-row w-full  justify-between items-center  ">
                    <img className=" xl:scale-125 max-w-7xl lg:max-w-lg md:w-1/3 sm:w-40   max-h-96" src={girlpic} alt="img" />
                    <img className="  xl:scale-125 max-w-5xl  lg:max-w-lg md:w-1/3 sm:w-40  max-h-96" src={boypic} alt="img" />
                </div>
                <div className="    flex flex-col justify-center items-center  ">
                    <img className=" w-7 md:w-10 z-10" src={mouse} alt="mouse" />
                    <img className="  absolute" src={polygon} alt="" />
                </div>
            </div>

    )
}
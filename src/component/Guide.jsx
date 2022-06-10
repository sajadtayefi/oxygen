import React from "react";
import background from "../Assets/Picture/Group 3039.png";
import rocket from "../Assets/Picture/Launch.png";


export default function Guide() {
    return (
        <div className=" bg-bar  rounded-3xl sm:flex-row-reverse flex-col   bg-center bg-no-repeat md:justify-around   flex  justify-center items-center mt-20 lg:mt-40 w-full ">
            <img className=" md:hidden sm:flex -translate-y-7  w-20 " src={rocket} alt=" rocket" />
            <div className="flex flex-row-reverse   justify-center items-center ">
            <img className=" hidden md:flex -translate-y-7  w-20 " src={rocket} alt=" rocket" />
                    <h3 className=" text-white lg:ml-40 text-2xl  sm:full ">
                        تیم مشاوران اکسیژن آماده راهنمایی رایگان شما هستند !
                    </h3>
            </div>
                  
                    <button className=" rounded-lg sm:w-50  bg-white w-52 m-2 p-3">
                        رایگان شروع کنید ...
                    </button>
        </div>
    )
}
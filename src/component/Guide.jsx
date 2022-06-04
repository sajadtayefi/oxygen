import React from "react";
import "../index.css";
import background from "../Assets/Picture/Group 3039.png";
import rocket from "../Assets/Picture/Launch.png";


export default function Guide() {
    return (
        <div className="Container w-full flex flex-col mt-52 ">
            <div className=" flex flex-row justify-center w-full items-center p-10 ">
                <img className=" relative self-center height-guide w-screen " src={background} alt="background" />
                <div className=" flex flex-row-reverse w-full justify-start items-center absolute">
                    <img className="  w-28 m-15 -translate-y-9  -translate-x-12 " src={rocket} alt=" rocket" />
                        <h3 className=" text-white mx-16 m-15">
                            تیم مشاوران اکسیژن آماده راهنمایی رایگان شما هستند !
                        </h3>
                        <button className=" rounded-lg mr-auto ml-28 bg-white w-52 m-15 p-5">
                            رایگان شروع کنید ...
                        </button>
                </div>
            </div>
        </div>
    )
}
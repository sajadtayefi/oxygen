import React from "react";
import question from "../Assets/Picture/question.png"
import arrow from "../Assets/Icon/Path 6.png"



export default function Question() {
    return (
        <div className=" flex flex-col justify-center items-center  lg:mt-40 w-full">
            <img className="max-w-sm lg:max-w-lg self-center " src={question} alt="picture" />
            <div className="  w-full">
                <ul className=" flex flex-col justify-center items-center text-right w-full font-bold ">
                    <li className=" flex flex-row-reverse justify-between items-center w-full md:mx-32 m-5 p-5 rounded-2xl bg-white ">
                        <span className="m-2">اُ2 بهترین روش برای ساخت یک فروشگاه ساز آنلاین !</span> <img className=" w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center w-full md:mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span className="m-2">آیا امکان طراحی یک قالب اختصاصی هم وجود دارد !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center w-full md:mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span className="m-2">آیا برای پشتیبانی اُ2 باید هزینه‌ای پرداخت شود !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center w-full md:mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span className="m-2">قالب فروشگاه به چه معنی است !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center w-full md:mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span className="m-2">خدمات  360  درجه چیست !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                </ul>
            </div>
        </div>
    )
}
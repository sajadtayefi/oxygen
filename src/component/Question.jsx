import React from "react";
import question from "../Assets/Picture/question.png"
import arrow from "../Assets/Icon/Path 6.png"



export default function Question() {
    return (
        <div className=" flex flex-col justify-center items-center  mt-40 w-full">
            <img className=" w-4/12" src={question} alt="picture" />
            <div className=" m-10 w-full">
                <ul className=" flex flex-col text-right w-full font-bold ">
                    <li className=" flex flex-row-reverse justify-between items-center mx-32 m-5 p-5 rounded-2xl bg-white ">
                        <span>اُ2 بهترین روش برای ساخت یک فروشگاه ساز آنلاین !</span> <img className=" w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span>آیا امکان طراحی یک قالب اختصاصی هم وجود دارد !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span>آیا برای پشتیبانی اُ2 باید هزینه‌ای پرداخت شود !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span>قالب فروشگاه به چه معنی است !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                    <li className=" flex flex-row-reverse justify-between items-center mx-32 m-5 p-5  rounded-2xl bg-white">
                        <span>خدمات  360  درجه چیست !</span> <img className="w-4" src={arrow} alt="arrow" /></li>
                </ul>
            </div>
        </div>
    )
}
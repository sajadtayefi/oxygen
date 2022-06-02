import React from "react";
import "../index.css"
import picture from "../Assets/Picture/Group 4826.png"
import image from "../Assets/Picture/social.png"

export default function WebSite() {
    return (
        <div className="Container w-full flex flex-col items-center" >
            <div className=" flex flex-row-reverse mt-80 justify-center ">
                <img className=" web-sizing mx-10  " src={picture} alt="picture" />
                <div className="flex flex-col justify-center items-end mx-10  web-sizing ">
                    <img className=" w-80 " src={image} alt="website" />
                    <div className="my-10 text-right ">
                        <p className="my-5">
                            توسعه فروشگاههایی با ظاهر جذاب و سرعت بینظیر و امکان مدیریت
                        </p>
                        <p className="my-5">
                            پیشرفته و با امکانات ایده آل به همراه پشتیبانی به منظور راحتی کاربر
                        </p>

                        <p className="my-5">
                            برای کسب و کارهای شما !
                        </p>
                    </div>
                    <button className=" translate-x-10  text-white rounded-xl justify-center background-image-btn-web w-48  p-2 m-10 h-12">
                        <span>
                            مشاوره و درخواست...
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
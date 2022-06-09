import React from "react";
import picture from "../Assets/Picture/Mask Group 10.png"
import image from "../Assets/Picture/applicion.png"

export default function WebSite() {
    return (
        <div className="Container w-full flex flex-col items-center justify-center" >
            <div className=" flex flex-col-reverse lg:mt-40 mt-20 justify-center items-center xl:flex-row  ">
                <img className=" mx-10  w-2/5 h-auto  " src={picture} alt="picture" />
                <div className="flex flex-col justify-center items-end mx-10 w-2/5 h-auto   ">
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
                    <button className=" sm:w-40 translate-x-10 btn-gradnt1  text-white rounded-xl justify-center background-image-btn-web w-48  p-2 m-10 h-12">
                        <span>
                            مشاوره و درخواست...
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
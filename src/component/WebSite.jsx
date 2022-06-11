import React from "react";
import picture from "../Assets/Picture/OT11BK0.png"
import image from "../Assets/Picture/website.png"

export default function WebSite() {
    return (
            <div className=" w-full flex flex-col-reverse xl:flex-row-reverse items-center lg:mt-56  mt-20 justify-center ">
                <img className="max-w-lg w-full self-center mx-5" src={picture} alt="picture" />
                <div className="flex flex-col justify-center mx-5 items-end h-auto   ">
                    <img className="md:w-1/2 " src={image} alt="website" />
                    <div className=" text-right ">
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
                    <button className=" sm:w-40 btn-gradnt translate-x-10  text-white rounded-xl justify-center background-image-btn-web w-48  p-2 mr-10 h-12">
                        <span>
                            مشاوره و درخواست...
                        </span>
                    </button>
                </div>
            </div>
    )
}
import React, { useState } from "react";
import consultant from "../Assets/Picture/consultant.png"
import request from "../Assets/Picture/request.png"



export default function Request() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")


    const texthandler = (e) => {
        setName(e.target.value)
    }
    const phonehandler = (e) => {
        setPhone(e.target.value)
    }



    return (
        <div className="  flex flex-col lg:flex-row p-5 lg:mt-40  items-center ">
            <div className=" w-full flex justify-center " >
                <img className=" w-60 lg:w-full " src={consultant} alt="picture" />
            </div>
            <div className=" flex flex-col text-right justify-center items-center w-full">
                <img className=" max-w-xs self-center" src={request} alt="picture" />
                <div className="" >
                    <p className=" m-3 mr-10">
                        درخواست مشاوره رایگان با تیم اکسیژن پس همین الان برای رشد
                    </p>
                    <p className=" m-3 mr-10">
                        کسب و کارت هر چه سريع تر با مشاوران ما تماس بگیرید …
                    </p>
                </div>
                <form className=" flex flex-col m-10 w-full text-sm justify-center items-center ">
                    <input
                        className=" icon-user  w-8/12 bg-white p-3 m-2 rounded-xl text-right "
                        value={name}
                        type="text"
                        placeholder="نام و نام خاوادگی"
                        onChange={texthandler} />
                    <input
                        className=" icon-phone w-8/12 bg-white p-3 m-2 rounded-xl text-right "
                        value={phone}
                        type="text"
                        placeholder="شماره تماس"
                        onChange={phonehandler} />
                    <select className=" icon-arrow   w-8/12 bg-white p-3 m-2 rounded-xl text-right" name="" id="">
                        <option className="" value="">
                            بازه زمانی
                        </option>
                    </select>
                    <button className="  btn-gradnt3 self-end mr-[120px]  p-3  mt-10  w-36 flex flex-row font-light justify-center items-center text-white rounded-xl ">
                        <span className=" flex flex-row justify-center items-center ">
                            مشاوره و درخواست ...
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}   
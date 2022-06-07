import React from "react";
import conversation from "../Assets/Picture/conversation.png"
import next from "../Assets/Icon/Path 2358.png"
import prev from "../Assets/Icon/Path 2357.png"
import pageintion from "../Assets/Icon/Group 1407.png"
import profile from "../Assets/Icon/Group 4842.png"


export default function Conversation() {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-40">
            <div className="top-picture" >
                <img src={conversation} alt="picture" />
            </div>
            <div className="flex flex-col justify-center w-full mt-28  items-center m-10">
                <div className="flex flex-row items-center justify-around w-full">
                    <img className=" w-9  " src={prev} alt="prev" />
                    <div className=" flex flex-col  box m-10  justify-between h-full p-2 rounded-xl bg-white text-right">
                        <div className="flex flex-row justify-between">
                            <img className=" -translate-y-12 translate-x-10 w-20" src={profile} alt="profile" />
                            <div className=" p-4">
                                <h3 className=" text-indigo-800  ">محمدامین علیزاده</h3>
                                <h4 className=" text-xs m-1 mt-3"> مدیر فروشگاه شیک پوش</h4>
                            </div>
                        </div>
                        <div className=" flex flex-col h-full mt-10  ">
                            <p className="my-3">
                                تیم جوان و با انگیزه که با پشتیبانی عالی و سريع در کسب و کار و رونق بخشی به
                            </p >
                            <p className="my-3">
                                کسب و کار ها شده اند. از تیم عالی اکسیژن بابت خدمات  360  درجه تشکر و
                            </p >
                            <p className="my-3">
                                قدردانی فروان میکنم از تیم عالی اکسیژن .
                            </p>
                        </div>
                    </div>
                    <img className=" w-9  cursor-pointer " src={next} alt="next" />
                </div>
                <img className="" src={pageintion} alt="page" />
            </div>
        </div>
    )
}

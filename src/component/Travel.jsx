import React from "react";
import format from "../Assets/Picture/format.png"
import object from "../Assets/Picture/object.png"
import next from "../Assets/Icon/Path 2358.png"
import prev from "../Assets/Icon/Path 2357.png"


export default function Travel() {
    return (
        <div className=" mt-40 w-full flex flex-col justify-center items-center p-10">
            <div className="flex flex-row top-picture ">
                <img className="  " src={format} alt="picture" />
            </div>
            <div className=" flex flex-row-reverse w-full justify-center items-center mt-20">
                <button>
                    <img className="w-9 ml-16" src={next} alt="next" />
                </button>
                <img className=" w-3/6" src={object} alt="object" />
                <button >
                    <img className="w-9 mr-16" src={prev} alt="prev" />
                </button>
            </div>
        </div>
    )
}
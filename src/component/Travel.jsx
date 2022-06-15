import React from "react";
import format from "../Assets/Picture/format.png"
import object from "../Assets/Picture/object.png"
import next from "../Assets/Icon/Path 2358.png"
import prev from "../Assets/Icon/Path 2357.png"


export default function Travel() {
    return (
        <div className=" lg:mt-40 w-full flex flex-col justify-center items-center p-10">
            <div className="flex flex-row top-picture w-auto ">
                <img className=" max-w-xs lg:max-w-lg self-center  " src={format} alt="picture" />
            </div>
            <div className=" flex flex-row-reverse w-full justify-around items-center mt-20">
                <button>
                    <img className="w-9 " src={next} alt="next" />
                </button>
                <img className=" w-96 lg:max-w-lg self-center " src={object} alt="object" />
                <button >
                    <img className="w-9 " src={prev} alt="prev" />
                </button>
            </div>
        </div>
    )
}
import React from 'react'
import close from "../Assets/Icon/close.png"

const barItems = ({ toggleNavbar, navbar }) => {
    return (
        <div className='' >
            <ul className={navbar ? "xl:hidden flex flex-col justify-center transition-all delay-100  items-center  " : "hidden"}>
                <img onClick={toggleNavbar} className="w-6 mx-10  border-gray-800 border-b-2 cursor-pointer" src={close} alt="" />
                <li className="w-auto text-blue-500  " >
                    <span className='mx-10 hover:text-red-600 transition-all delay-300 cursor-pointer '>
                        صفحه اصلی
                    </span>
                </li>
                <li className="  w-auto">
                    <span className="mx-10">
                        خدمات
                    </span>
                </li>
                <li className=" w-auto ">
                    <span className="mx-10">
                        فروشگاه ها
                    </span>
                </li>
                <li className=" w-auto ">
                    <span className="mx-10">
                        وبلاگ
                    </span>
                </li>
                <li className=" w-auto  ">
                    <span className="mx-10">
                        ارتباط با ما
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default barItems
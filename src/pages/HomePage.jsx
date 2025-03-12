import React from 'react'
import Cher from "../assets/noroot.jpg"

export default function HomePage() {
    return (
        <div className="grid grid-cols-2">
            <div>
                <div className="w-[68%] h-[80%] text-center border rounded-[85%] ml-[150px]  mt-[10%]">
                    <h2 className={"text-[50px] mt-[125px]"}>ДИЗАЙН-БЮРО <span
                        className={"text-[#994843]  "}>CHERES</span></h2>
                    <p className={"w-[280px] text-[18px] ml-[120px]"}>разработка рабочей документации и визуализаций к
                        дизайн-проектам</p>
                    <button className={"bg-[#994843] text-white w-[170px] h-[45px] rounded-[35px] mt-[30px]"}>услуги
                    </button>

                </div>
            </div>
            <div>
                <img src={Cher} alt="" className={"w-[75%] pt-16"}/>
            </div>

        </div>


    )
}
